import React from 'react';
import { Redirect } from 'react-router-dom'

import { useQuery, useMutation } from '@apollo/react-hooks';
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
  let inputName;
  let inputDescription;
  let inputSteps;
  let inputDifficulty;
  let inputTime;
  let inputCategory;
  const [addRecipe, { data }] = useMutation(CREATE_RECIPE);
  if(data && data.createRecipe) return <Redirect to={'/recipe/'+data.createRecipe.id} />

  return (
    <div className="content">
        <h1>Create new recipe</h1>
        <form onSubmit={e => {
        e.preventDefault();
        addRecipe({ variables: { title: inputName.value,
          description: inputDescription.value,
          steps: inputSteps.value,
          difficulty: inputDifficulty.options[inputDifficulty.selectedIndex].value,
          cookingTime: inputTime.value,
          categoryId: inputCategory.options[inputCategory.selectedIndex].value
        }});
        }}>
            <p>Recipe name:</p>
            <input type='text' placeholder="Name" required ref={node => {
                inputName = node;
            }}/>
            <p>Description:</p>
            <input type='text' placeholder="Description" required ref={node => {
                inputDescription = node;
            }}/>
            <p>Steps:</p>
            <input type='text' placeholder="Steps" required ref={node => {
                inputSteps = node;
            }}/>
            <p>Difficulty:</p>
            <select required ref={node => {
                inputDifficulty = node;
            }}>
                <option value="Easy">Easy</option>
                <option value="Hard">Hard</option>
            </select>
            <p>Cooking time:</p>
            <input type='number' placeholder="Cooking time" required ref={node => {
                inputTime = node;
            }}/>
            <p>Category:</p>
            <select required ref={node => {
                inputCategory = node;
            }}>
                <CategoryOptions/>
            </select>
            
            <input type='submit' value="Create"/>
        </form>
    </div>
  );
}

const CategoryOptions = () => {
    const { loading, error, data } = useQuery(ALL_CATEGORIES);

    if(loading) return(<option>Loading categories...</option>);
    if(error) return alert("Error loading categories!");
    var categories = null;
    if (data && data.getCategories) categories = data.getCategories;

    return ([
      categories.map((cat) => (
      <option key={cat.id} value={cat.id}>
          {cat.title}
      </option>
      ))
    ]);
}

export default CreateRecipeView;