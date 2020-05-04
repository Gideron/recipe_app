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
      body
      id
      username
      createdAt
    }
  }
`;

const RecipeListView = ({match}) => {
    if(match && match.params.category){
        return (
            <div className="content">
                <h1>Category: {match.params.category}</h1>
                <RecipeList />
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

const RecipeList = () => {
    const { loading, error, data } = useQuery(ALL_RECIPES);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    
    return (
    <ul className="recipe-list">
        {data.getRecipes.map(recipe => (
        <Link key={"link"+recipe.id} to={"/recipe/" + recipe.id}>
            <li className="recipe-list-element" key={"li"+recipe.id} to={"/recipe/" + recipe.id}>
                <div className="recipe-header">
                    <h2>{recipe.Title}</h2>
                    <span className="bookmark-button"><BookmarkIcon /></span>
                </div>
                <RateElement rates={recipe.Rates}/>
                <img className="recipe-img" src={recipe.Picture} alt="food" />
            </li>
        </Link>
        ))}
    </ul>
    );
}

export default RecipeListView;