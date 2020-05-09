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
  // Mutation: {
  //   loginUser: async (parent, { email, password }, { req, res, prisma }) => {
  //     const UserExists = await prisma.user({ email });
  //     if (!UserExists) {
  //       throw new Error("wrong credentials in email");
  //     }
  //     await bcrypt
  //       .compare(password, UserExists.password)
  //       .then(async (isMatch) => {
  //         if (isMatch) {
  //           const payload = {
  //             id: UserExists.id,
  //           };
  //           // Sign token
  //           let token = await jwt.sign(payload, SECRET, {
  //             expiresIn: 31556926, // 1 year in seconds
  //           });
  //           let loginUser = {
  //             id: "!23fefsSa",
  //             token: "dadwdw",
  //           };
  //           return loginUser;
  //         }
  //       })
  //       .catch((err) => {
  //         throw new Error(err);
  //       });
  //   },
  //   createUser: async (
  //     parent,
  //     { name, email, password },
  //     { req, res, prisma }
  //   ) => {
  //     const userExists = await prisma.user({ email });
  //     if (userExists) {
  //       res.status(401).json({ msg: "Invalid credencial" });
  //     }

  //     const newUser = {
  //       name: name,
  //       email: email,
  //       password: await bcrypt.genSalt(10, function(err, salt) {
  //         bcrypt.hash(password, salt, function(err, hash) {});
  //       }),
  //     };
  //     return prisma.createUser(newUser);
  //   },
  //   authFacebook: async (
  //     parent,
  //     { input: { accessToken } },
  //     { req, res, prisma }
  //   ) => {
  //     req.body = { ...req.body, access_token: accessToken };
  //     try {
  //       const { data, info } = await authenticateFacebook(req, res);
  //       if (data) {
  //         const user = await prisma.user({
  //           email: data.profile.emails[0].value,
  //         });
  //         let userId = null;
  //         if (!user) {
  //           let newUser = await prisma.createUser({
  //             id: data.profile.id,
  //             name: data.profile.displayName || data.profile.givenName,
  //             email: data.profile.emails[0].value,
  //             password: await bcrypt.hash(data.profile.emails[0].value, 12),
  //           });
  //           userId = newUser.id;
  //         }

  //         let userToken = {
  //           id: userId || user.id,
  //           token: data.accessToken,
  //         };
  //         res.cookie("token", userToken.token, { httpOnly: true }); // like that
  //         return userToken;
  //       }
  //       if (info) {
  //         console.log(info);
  //         switch (info.code) {
  //           case "ETIMEDOUT":
  //             return new Error("Failed to reach Facebook: Try Again");
  //           default:
  //             return new Error("something went wrong");
  //         }
  //       }
  //       return Error("server error");
  //     } catch (error) {
  //       return error;
  //     }
  //    },
  // },
};
