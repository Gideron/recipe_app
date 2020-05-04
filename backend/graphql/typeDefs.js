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
    body: String!
    username: String!
    createdAt: String!
  }

  type Query {
    getRecipes: [Recipe]
    getRecipe(recipeId: ID!): Recipe
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createRecipe(body: String!): Recipe!
    deleteRecipe(recipeId: ID!): String!
  }
`;
