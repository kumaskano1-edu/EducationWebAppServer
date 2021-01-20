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
    createUser: async (
      parent,
      { name, email},
      { req, res, prisma }
    ) => {
      const userExists = await prisma.user({ email });
      if (userExists) {
        throw new Error("User with this email, already exists");
        return 0;
      }

      const newUser = {
        name: name,
        email: email,
      };
      return prisma.createUser(newUser);
    },
    
  },
};
