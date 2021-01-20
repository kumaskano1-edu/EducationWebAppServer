const { prisma } = require("./prisma/generated/prisma-client");
const { ApolloServer } = require("apollo-server");
const { mergeTypes } = require("merge-graphql-schemas");
const { makeExecutableSchema } = require("graphql-tools");
const { importSchema } = require("graphql-import");
const {isTokenValid} = require("./authentication/validate");
//Importing TypeDefs
const typeDefs = importSchema("./typeDefs/Authorization.graphql");
//Importing Resolvers
const resolvers = require("./resolvers/Authentication.js");
//Creating the schema
const PORT = process.env.PORT || 5000;
const schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});
async function auth() {
  let isAuthenticated = false;
  try {
    const authHeader = req.headers.authorization || "";
    if(authHeader) {
      const payload = await isTokenValid(authHeader)
      isAuthenticated = payload && payload.sub ? true :false;
    }

    }catch(error){
      console.log(error)
    }
  return {isAuthenticated};

}
//create server
const server = new ApolloServer({
  schema,
  auth,
  context: async ({ req, res }) => {
    let isAuthenticated = false;
    try {
      const authHeader = req.headers.authorization || "";
      if(authHeader) {
        const payload = await isTokenValid(authHeader)
        isAuthenticated = payload && payload.sub ? true :false;
      }

      }catch(error){
        console.log(error)
      }
    return {isAuthenticated, res, prisma};
  },
});

server.listen(PORT).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
