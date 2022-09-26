const app = require('express')();
const assets = require('./assets');
const Server = require('./graphql');

const { PORT = 8080 } = process.env;

const server = new Server(app);
server.startApollo();
app.use(assets).listen(PORT);

console.log(`Running a GraphQL API server at localhost:${PORT}/graphql`);
