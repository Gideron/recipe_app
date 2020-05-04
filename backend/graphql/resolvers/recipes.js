const { AuthenticationError } = require("apollo-server");

const Recipe = require("../../models/recipe");
const auth = require("../../utils/checkAuth");

module.exports = {
  Query: {
    async getRecipes() {
      try {
        const recipes = await Recipe.find().sort({ createdAt: -1 });
        return recipes;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getRecipe(_, { recipeId }) {
      try {
        const recipe = await Recipe.findById(recipeId);
        if (recipe) {
          return recipe;
        } else {
          throw new Error("Recipe not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async createRecipe(_, { body }, context) {
      const user = auth(context);

      const newRecipe = new Recipe({
        body,
        user: user.id,
        username: user.username,
        createdAt: new Date().toISOString(),
      });

      const recipe = await newRecipe.save();

      return recipe;
    },
    async deleteRecipe(_, { recipeId }, context) {
      const user = auth(context);

      try {
        const recipe = await Recipe.findById(recipeId);
        if (user.username === recipe.username) {
          await recipe.delete();
          return "Recipe deleted successfully";
        } else {
          throw new AuthenticationError("Action not allowed");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
