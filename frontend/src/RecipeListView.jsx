import React from 'react';
//material icons
import BookmarkIcon from '@material-ui/icons/Bookmark';
//import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
//mockup data
import RecipeData from './mockup_data/RecipeList.json'
import RateElement from './RateElement'

import {Link} from "react-router-dom";

const RecipeListView = ({match}) => {
    if(match && match.params.category){
        console.log("category: " + JSON.stringify(match.params.category));
        console.log("MATCH: " + JSON.stringify(match));
        return (
            <div class="content">
                <h1>Category: {match.params.category}</h1>
                <RecipeList />
            </div>
        );
    }
    return (
    <div class="content">
        <h1>Recipes/Bookmarks</h1>
        <RecipeList />
    </div>
    );
}

const RecipeList = () => {
    return (
    <ul className="recipe-list">
        {RecipeData.map(recipe => (
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