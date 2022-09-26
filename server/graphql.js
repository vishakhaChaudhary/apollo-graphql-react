const { ApolloServer, gql } = require('apollo-server-express');
const { type, resolver } = require('./module');
const { getService } = require('./service');

class Server {
  constructor(app) {
    this.app = app;
  }

  startApollo = async () => {
    try {
      const apolloServer = new ApolloServer({
        typeDefs        : [...Object.values(type)],
        resolvers       : resolver,
        playground      : true,
        introspection   : true,
        dataSources     : () => getService(),
        formatError: (err) => {
          if (err && err.message.includes("$input")) {
            return err.message.split(";").pop().trim();
          }
          return err.message;
        },
      });
      apolloServer.applyMiddleware({ app: this.app, path: '/graphql' });
      console.info("startApollo - apollo started now!!:");
    } catch (err) {
      console.error("error in loading types", err);
    }
  };

}

module.exports = Server;
