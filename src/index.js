const { ApolloServer } = require('apollo-server-express');
const express = require("express");

const {MaSC} = require('./MaS');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const server = new ApolloServer({ typeDefs, resolvers, playground: true, context: ({ req }) => ({ req }) });
const app = express();



server.applyMiddleware({ app, path: '/' });

MaSC();




app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
