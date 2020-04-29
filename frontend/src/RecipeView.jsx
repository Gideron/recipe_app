import React from 'react';
//material icons
import BookmarkIcon from '@material-ui/icons/Bookmark';
//import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
//mockup data
import RecipeData from './mockup_data/RecipeList.json'
import RateElement from './RateElement'

const RecipeView = ({match}) => {
    if(match && match.params.recipeId){
        console.log("recipeId: " + JSON.stringify(match.params.recipeId));
        console.log("MATCH: " + JSON.stringify(match));
        if(RecipeData.find(recipe => recipe.id === match.params.recipeId)) {
            return (
                <RecipeContent recipe={RecipeData.find(recipe => recipe.id === match.params.recipeId)} />
            );
        }
    }
    return (
    <div id="content">
        <h1 style={{color: "red"}}>Recipe not found</h1>
    </div>
    );
}

const RecipeContent = (props) => {
    return (
        <div id="content">
            <h1>Recipe ID: {props.recipe.id}</h1>
        </div>
    );
}

export default RecipeView;