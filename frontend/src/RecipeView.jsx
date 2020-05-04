import React from 'react';
//material icons
import BookmarkIcon from '@material-ui/icons/Bookmark';
//import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
//mockup data
import RecipeData from './mockup_data/RecipeList.json'
import RateElement from './RateElement'

const RecipeView = ({match}) => {
    if(match && match.params.recipeId){
        if(RecipeData.find(recipe => recipe.id === match.params.recipeId)) {
            return (
                <div className="content">
                    <RecipeContent recipe={RecipeData.find(recipe => recipe.id === match.params.recipeId)} />
                </div>
            );
        }
    }
    return (
    <div className="content">
        <h1 style={{color: "red"}}>Recipe not found</h1>
    </div>
    );
}

const RecipeContent = (props) => {
    return (
        <div className="recipe-view">
            <div className="recipe-view-header">
                <h1>{props.recipe.Title} <span>ID: {props.recipe.id}</span></h1>
                <BookmarkIcon />
            </div>
            <RateElement rates={props.recipe.Rates}/>
            <img className="recipe-img" src={props.recipe.Picture} alt="food" />
            <h3>Description:</h3>
            <p>{props.recipe.Description}</p>
            <h3>Steps:</h3>
            <p>{props.recipe.Steps}</p>
            <h3>Comments:</h3>
            {props.recipe.Comments.map((comment) => (
                <div key={"comment"+comment.id} className="recipe-comment">
                    <h4>{comment.Author}:</h4>
                    <p>{comment.Comment}</p>
                </div>
            ))}
        </div>
    );
}

export default RecipeView;