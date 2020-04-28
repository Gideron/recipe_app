import React from 'react';
//material icons
import BookmarkIcon from '@material-ui/icons/Bookmark';
//import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
//import StarHalfIcon from '@material-ui/icons/StarHalf';
//mockup data
import RecipeData from './mockup_data/RecipeList.json'

const RecipeListApp = () => {
    return (
    <div id="content">
        <h1>Recipes/Bookmarks</h1>
        <RecipeList />
    </div>
    );
}

const RecipeList = () => {
    return (
    <ul className="recipe-list">
        {RecipeData.map(recipe => (
        <li className="recipe-element" key={recipe.id}>
            <div className="recipe-header">
                <h2>{recipe.Title}</h2>
                <a className="bookmark-button"><BookmarkIcon /></a>
            </div>
            <RateElement rates={recipe.Rates}/>
            <img className="recipe-img" src={recipe.Picture} alt="picture of food" />
        </li>
        ))}
    </ul>
    );
}
/*const RecipeListApp = (
    <div id="content">
        <h1>Recipes/Bookmarks</h1>
        <RecipeList />
    </div>
);*/

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

export default RecipeListApp;