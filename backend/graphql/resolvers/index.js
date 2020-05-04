const userResolvers = require("./users");
const categoryResolvers = require("./categories");
const recipeResolvers = require("./recipes");
const commentResolvers = require("./comments");

module.exports = {
  Mutation: {
    ...userResolvers.Mutation,
  },

  Query: {
    ...recipeResolvers.Query,
  },
};
