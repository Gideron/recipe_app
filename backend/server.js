"use strict";

require("dotenv").config();

const { ApolloServer } = require("apollo-server");

const express = require("express");
const db = require("./database/db");
const app = express();
const port = 3030;

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const userRoute = require("./routes/userRoute");
const recipeRoute = require("./routes/recipeRoute");
const categoryRoute = require("./routes/categoryRoute");
const commentRoute = require("./routes/commentRoute");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
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
