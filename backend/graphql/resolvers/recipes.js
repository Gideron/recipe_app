const { AuthenticationError, UserInputError } = require("apollo-server");

const Recipe = require("../../models/recipe");
const Category = require('../../models/category');
const auth = require("../../utils/checkAuth");

module.exports = {
  Query: {
    async getRecipes() {
      try {
        const recipes = await Recipe.find().populate('category').sort({ createdAt: -1 });
        return recipes;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getRecipe(_, { recipeId }) {
      try {
        const recipe = await Recipe.findById(recipeId).populate('category');
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
    async createRecipe(
      _,
      { title, description, steps, difficulty, cookingTime, categoryId },
      context
    ) {
      const user = auth(context);

      const newRecipe = new Recipe({
        title,
        description,
        steps,
        username: user.username,
        difficulty,
        cookingTime,
        category: categoryId,
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
    async bookmarkRecipe(_, { recipeId }, context) {
      const { username } = auth(context);

      const recipe = await Recipe.findById(recipeId);
      if (recipe) {
        if (
          recipe.bookmarks.find((bookmark) => bookmark.username === username)
        ) {
          recipe.bookmarks = recipe.bookmarks.filter(
            (bookmark) => bookmark.username !== username
          );
          await recipe.save();
        } else {
          recipe.bookmarks.push({
            username,
            createdAt: new Date().toISOString(),
          });
        }
        await recipe.save();
        return recipe;
      } else throw new UserInputError("Recipe not found");
    },
    async rateRecipe(_, { recipeId, rate }, context) {
      const { username } = auth(context);

      const recipe = await Recipe.findById(recipeId);
      if (recipe) {
        if (recipe.rates.find((rate) => rate.username === username)) {
          recipe.rates = recipe.rates.filter(
            (rate) => rate.username !== username
          );
          await recipe.save();
        } else {
          recipe.rates.push({
            username,
            rate,
            createdAt: new Date().toISOString(),
          });
        }
        await recipe.save();
        return recipe;
      } else throw new UserInputError("Recipe not found");
    },
  },
};
