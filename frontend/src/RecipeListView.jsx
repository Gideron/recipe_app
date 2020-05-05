import React from 'react';
//material icons
import BookmarkIcon from '@material-ui/icons/Bookmark';
//import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
//mockup data
//import RecipeData from './mockup_data/RecipeList.json'
import RateElement from './RateElement'

import {Link} from "react-router-dom";

import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost"

const ALL_RECIPES = gql`
  {
    getRecipes{
        id,
        title,
        description,
        steps,
        difficulty,
        cookingTime,
    }
  }
`;

const RecipeListView = ({match}) => {
    if(match && match.params.category){
        return (
            <div className="content">
                <h1>Category: {match.params.category}</h1>
                <RecipeList category={match.params.category}/>
            </div>
        );
    }
    return (
    <div className="content">
        <h1>Recipes/Bookmarks</h1>
        <RecipeList />
    </div>
    );
}

const RecipeList = (props) => {
    const { loading, error, data } = useQuery(ALL_RECIPES);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    var recipeListData = data.getRecipes;
    if(props && props.category)
        recipeListData = data.getRecipes.find(recipe => recipe.category === props.category);
    
    if(!recipeListData) return <p>Recipes not found</p>
    
    return (
    <ul className="recipe-list">
        {recipeListData.map(recipe => (
        <Link key={"link"+recipe.id} to={"/recipe/" + recipe.id}>
            <li className="recipe-list-element" key={"li"+recipe.id} to={"/recipe/" + recipe.id}>
                <div className="recipe-header">
                    <h2>{recipe.title}</h2>
                    <span className="bookmark-button"><BookmarkIcon /></span>
                </div>
                <RateElement rates={recipe.rates}/>
                <img className="recipe-img" src={recipe.picture? recipe.picture : "https://via.placeholder.com/300x150"} alt="food" />
                <p>{recipe.description}</p>
            </li>
        </Link>
        ))}
    </ul>
    );
}

export default RecipeListView;