import React from 'react';
//material icons
import BookmarkIcon from '@material-ui/icons/Bookmark';
//import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
//mockup data
import RecipeData from './mockup_data/RecipeList.json'
import { red } from '@material-ui/core/colors';

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

const RateElement = (props) => {
    function createStarIcons(count) {
        let stars = [];
        console.log("createStarIcons: " + count)
        for(let i = 0; i< count;i++){
            stars.push(<StarIcon key={i}/>);
        }
        return (stars);
    }
    function createStarBorderIcons(count) {
        console.log("createStarBorderIcons: " + count)
        let stars = [];
        for(let i = 0; i< count;i++){
            stars.push(<StarBorderIcon key={i}/>);
        }
        return (stars);
    }
    function showRate() {
        var currentRate = 0;
        console.log(props.rates)
        for(var i = 0; i < props.rates.length; i++) {
        currentRate += props.rates[i].Rate;
        if(props.rates[i].User == "ThisUser"){
            return (
            <a>
                <span>
                {createStarIcons(props.rates[i].Rate)}
                </span>
                {createStarBorderIcons(5 - props.rates[i].Rate)}
            </a>
            );
        }
        }
        currentRate /= props.rates.length;
        return (
        <a>
            {createStarIcons(Math.round(currentRate))}
            {createStarBorderIcons(5 - Math.round(currentRate))}
        </a>
        );
    }
    
    return (
        <div className="rate">
            {showRate()}
        </div>
    );
}

export default RecipeView;