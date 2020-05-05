import React from 'react';
//material icons
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
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
        rates{id,username,rate},
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

var loggedin = true;
var bookmarked = false;
function toggleBookmarkQuery(recipeId) {
    /*const { loading, error, data } = useQuery(ALL_RECIPES);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;*/
    console.log("Do the query to bookmark here, recipe:"+recipeId);
    bookmarked = !bookmarked;
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
            <li className="recipe-list-element" key={"li"+recipe.id} to={"/recipe/" + recipe.id}>
                <div className="recipe-header">
                    <Link to={"/recipe/" + recipe.id}><h2>{recipe.title}</h2></Link>
                    <button className="bookmark-button" onClick={toggleBookmarkQuery.bind(this, recipe.id)}>{loggedin&&bookmarked ?  <BookmarkIcon /> : <BookmarkBorderIcon />}</button>
                </div>
                <RateElement rates={recipe.rates}/>
                <img className="recipe-img" src={recipe.picture? recipe.picture : "https://via.placeholder.com/300x150"} alt="food" />
                <p>{recipe.description}</p>
            </li>
        ))}
    </ul>
    );
}

export default RecipeListView;