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
  type Recipe {
    id: ID!
    title: String!
    description: String!
    steps: String!
    user: User!
    difficulty: String!
    cookingTime: String!
    rates: [Rate]!
    comments: [Comment]!
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
  }

  type Query {
    getRecipes: [Recipe]
    getRecipe(recipeId: ID!): Recipe
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createRecipe(title: String!, description: String!, steps: String!, difficulty: String!, cookingTime: String!): Recipe!
    deleteRecipe(recipeId: ID!): String!
    createComment(recipeId: String!, body: String!): Recipe!
    deleteComment(recipeId: ID!, commentId: ID!): Recipe!
    rateRecipe(recipeId: ID!): Recipe!
  }
`;
