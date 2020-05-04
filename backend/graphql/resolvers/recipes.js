const Recipe = require("../../models/recipe");

module.exports = {
  Query: {
    async getRecipes() {
      try {
        const recipes = await Recipe.find();
        return recipes;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
