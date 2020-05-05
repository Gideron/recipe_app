const { gql } = require("apollo-server");

module.exports = gql`
  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }
  input RegisterInput {
    email: String!
    username: String!
    password: String!
    confirmPassword: String!
  }

  input CategoryInput {
    id: ID!
  }

  type Recipe {
    id: ID!
    title: String!
    description: String!
    steps: String!
    username: String!
    difficulty: String!
    cookingTime: String!
    category: [Category]!
    rates: [Rate]!
    comments: [Comment]!
    bookmarks: [Bookmark]!
  }
  type Category {
    id: ID!
    title: String!
  }
  type Comment {
    id: ID!
    createdAt: String!
    username: String!
    body: String!
  }
  type Rate {
    id: ID!
    createdAt: String!
    username: String!
    rate: Int!
  }
  type Bookmark {
    id: ID!
    username: String!
  }

  type Query {
    getRecipes: [Recipe]
    getRecipe(recipeId: ID!): Recipe
    getCategory(categoryId: ID!): Category
    getCategories: [Category]
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createRecipe(
      title: String!
      description: String!
      steps: String!
      difficulty: String!
      cookingTime: String!
      categoryId: ID!
    ): Recipe!
    deleteRecipe(recipeId: ID!): String!
    createComment(recipeId: String!, body: String!): Recipe!
    deleteComment(recipeId: ID!, commentId: ID!): Recipe!
    rateRecipe(recipeId: ID!, rate: Int!): Recipe!
    bookmarkRecipe(recipeId: ID!): Recipe!
    addCategory(title: String!): Category!
    deleteCategory(categoryId: ID!): String!
  }
`;
