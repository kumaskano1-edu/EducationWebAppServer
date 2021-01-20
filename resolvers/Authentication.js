const SECRET = process.env.SECRET || "Kuma";
module.exports = {
  Query: {
    users: async (parent, args, { isAuthenticated, prisma }, __) => {
      if(!isAuthenticated) {
        throw new Error("not authoried");
      }
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
      }

      const newUser = {
        name: name,
        email: email,
      };
      return prisma.createUser(newUser);
    },
    
  },
};
