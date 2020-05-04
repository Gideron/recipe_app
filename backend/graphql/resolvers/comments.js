const { AuthenticationError, UserInputError } = require("apollo-server");

const auth = require("../../utils/checkAuth");
const Recipe = require("../../models/recipe");

module.exports = {
  Mutation: {
    createComment: async (_, { recipeId, body }, context) => {
      const { username } = auth(context);
      if (body.trim() === "") {
        throw new UserInputError("Empty comment", {
          errors: {
            body: "Comment body must not be empty",
          },
        });
      }

      const recipe = await Recipe.findById(recipeId);
      if (recipe) {
        recipe.comments.unshift({
          body,
          username,
          createdAt: new Date().toISOString(),
        });
        await recipe.save();
        return recipe;
      } else throw new UserInputError("Recipe not found");
    },
    async deleteComment(_, { recipeId, commentId }, context) {
      const { username } = auth(context);

      const recipe = await Recipe.findById(recipeId);
      if (recipe) {
        const commentIndex = recipe.comments.findIndex(
          (c) => c.id === commentId
        );
        if (recipe.comments[commentIndex].username === username) {
          recipe.comments.splice(commentIndex, 1);
          await recipe.save();
          return recipe;
        } else {
          throw new AuthenticationError("Action allowed");
        }
      }
    },
  },
};
