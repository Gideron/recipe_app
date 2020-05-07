import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost"

const ALL_CATEGORIES = gql`
  {
    getCategories {
      id
      title
    }
  }
`;

const CREATE_RECIPE = gql`
mutation createRecipe($title: String!, $description: String!, $steps: String!, $difficulty: String!, $cookingTime: String!, $categoryId: ID!) {
    createRecipe(title: $title,
      description: $description,
      steps: $steps,
      difficulty: $difficulty,
      cookingTime:$cookingTime,
      categoryId: $categoryId){
      id
      title
    }
  }
`;
const CreateRecipeView = ({match}) => {
    return (
        <div className="content">
            <h1>Create new recipe</h1>
            <form>
                <p>Recipe name:</p>
                <input type='text' placeholder="Name" required/>
                <p>Description:</p>
                <input type='text' placeholder="Description" required/>
                <p>Steps:</p>
                <input type='text' placeholder="Steps" required/>
                <p>Difficulty:</p>
                <select required>
                    <option value="Easy">Easy</option>
                    <option value="Hard">Hard</option>
                </select>
                <p>Cooking time:</p>
                <input type='number' placeholder="Cooking time" required/>
                <p>Category:</p>
                <CategorySelect />
                
                <input type='submit' value="Create"/>
            </form>
        </div>
    );
}

const CategorySelect = () => {
    const { loading, error, data } = useQuery(ALL_CATEGORIES);

    if(loading) return(<p>Loading categories...</p>);
    if(error) return(<p>Error loading categories!</p>);
    var categories = null;
    if (data && data.getCategories) categories = data.getCategories;

    
    return (
        <select className="content">
                {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                    {cat.title}
                </option>
                ))}
        </select>
    );
}

export default CreateRecipeView;