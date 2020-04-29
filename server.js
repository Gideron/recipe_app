"use strict";

require("dotenv").config();

const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");

const express = require("express");
const db = require("./database/db");
const app = express();
const port = 3000;

const User = require("./models/user");

const userRoute = require("./routes/userRoute");
const recipeRoute = require("./routes/recipeRoute");
const categoryRoute = require("./routes/categoryRoute");
const commentRoute = require("./routes/commentRoute");

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
  }
  type Query {
    getUsers: [User]
  }
`;
const resolvers = {
  Query: {
    async getUsers() {
      try {
        const users = await User.find();
        return users;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRoute);
app.use("/recipe", recipeRoute);
app.use("/category", categoryRoute);
app.use("/comment", commentRoute);

db.on("connected", () => {
  server.listen(port);
}).then((res) => {
  console.log(`listening on port ${port}!`);
});
//app.listen(port, () => console.log(`Example app listening on port ${port}!`));
