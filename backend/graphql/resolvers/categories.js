const { AuthenticationError, UserInputError } = require("apollo-server");

const Category = require("../../models/category");
const auth = require("../../utils/checkAuth");

module.exports = {
  Query: {
    async getCategories() {
      try {
        const categories = await Category.find().sort({ createdAt: -1 });
        return categories;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getCategory(_, { categoryId }) {
      try {
        const category = await Category.findById(categoryId);
        if (category) {
          return category;
        } else {
          throw new Error("Category not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },

  Mutation: {
    async addCategory(_, { title }, context) {
      const user = auth(context);

      const newCategory = new Category({
        title,
      });

      const category = await newCategory.save();

      return category;
    },
    async deleteCategory(_, { categoryId }, context) {
      const user = auth(context);

      try {
        const category = await Category.findById(categoryId);

        await category.delete();
        return "Category deleted successfully";
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
