const userResolvers = require("./users");
const categoryResolvers = require("./categories");
const recipeResolvers = require("./recipes");
const commentResolvers = require("./comments");

module.exports = {
  Query: {
    ...recipeResolvers.Query,
    ...categoryResolvers.Query,
  },

  Mutation: {
    ...userResolvers.Mutation,
    ...recipeResolvers.Mutation,
    ...commentResolvers.Mutation,
    ...categoryResolvers.Mutation,
  },
};
