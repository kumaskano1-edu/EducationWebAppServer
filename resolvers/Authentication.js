const { authenticateFacebook } = require("../resolvers/utils/SocialAuth");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET || "Kuma";
module.exports = {
  Query: {
    users: async (parent, args, { prisma }, __) => {
      return await prisma.users();
    },
  },
  Mutation: {
    loginUser: async (parent, { email, password }, { req, res, prisma }) => {
      const UserExists = await prisma.user({ email });
      if (!UserExists) {
        throw new Error("wrong credentials in email");
      }
      const valid = await bcrypt.compare(password, UserExists.password);
      if (!valid) {
        throw new Error("Invalid password");
      }
      const token = jwt.sign({ userId: UserExists.id }, SECRET);
      // 3
      res.cookie("token", token, { httpOnly: true }); // like that
      return {
        id: UserExists.id,
        token: token,
      };
    },
    createUser: async (
      parent,
      { name, email, password },
      { req, res, prisma }
    ) => {
      const userExists = await prisma.user({ email });
      if (userExists) {
        throw new Error("User with this email, already exists");
      }

      const newUser = {
        name: name,
        email: email,
        password: await bcrypt.hash(password, 12),
      };
      return prisma.createUser(newUser);
    },
    authFacebook: async (
      parent,
      { input: { accessToken } },
      { req, res, prisma }
    ) => {
      req.body = { ...req.body, access_token: accessToken };
      try {
        const { data, info } = await authenticateFacebook(req, res);
        if (data) {
          const user = await prisma.user({
            email: data.profile.emails[0].value,
          });
          let userId = null;
          if (!user) {
            let newUser = await prisma.createUser({
              id: data.profile.id,
              name: data.profile.displayName || data.profile.givenName,
              email: data.profile.emails[0].value,
              password: await bcrypt.hash(data.profile.emails[0].value, 12),
            });
            userId = newUser.id;
          }

          let userToken = {
            id: userId || user.id,
            token: data.accessToken,
          };
          res.cookie("token", userToken.token, { httpOnly: true }); // like that
          return userToken;
        }
        if (info) {
          console.log(info);
          switch (info.code) {
            case "ETIMEDOUT":
              throw new Error("Failed to reach Facebook: Try Again");
            default:
              throw new Error("something went wrong");
          }
        }
        throw Error("server error");
      } catch (error) {
        return error;
      }
    },
  },
};
