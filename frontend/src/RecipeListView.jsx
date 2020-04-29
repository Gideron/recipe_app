import React from 'react';
//material icons
import BookmarkIcon from '@material-ui/icons/Bookmark';
//import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
//mockup data
import RecipeData from './mockup_data/RecipeList.json'

import {Link} from "react-router-dom";

const RecipeListView = ({match}) => {
    if(match && match.params.category){
        console.log("category: " + JSON.stringify(match.params.category));
        console.log("MATCH: " + JSON.stringify(match));
        return (
            <div id="content">
                <h1>Category: {match.params.category}</h1>
                <RecipeList />
            </div>
        );
    }
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
        <Link key={"link"+recipe.id} to={"/recipe/" + recipe.id}>
            <li className="recipe-list-element" key={"li"+recipe.id} to={"/recipe/" + recipe.id}>
                <div className="recipe-header">
                    <h2>{recipe.Title}</h2>
                    <span className="bookmark-button"><BookmarkIcon /></span>
                </div>
                <RateElement rates={recipe.Rates}/>
                <img className="recipe-img" src={recipe.Picture} alt="picture of food" />
            </li>
        </Link>
        ))}
    </ul>
    );
}

const RateElement = (props) => {
    function createStarIcons(count) {
        let stars = [];
        console.log("createStarIcons: " + count)
        for(let i = 0; i< count;i++){
            stars.push(<StarIcon key={"StarIcon"+i}/>);
        }
        return (stars);
    }
    function createStarBorderIcons(count) {
        console.log("createStarBorderIcons: " + count)
        let stars = [];
        for(let i = 0; i< count;i++){
            stars.push(<StarBorderIcon key={"StarBorderIcon"+i}/>);
        }
        return (stars);
    }
    function showRate() {
        var currentRate = 0;
        console.log(props.rates)
        for(var i = 0; i < props.rates.length; i++) {
        currentRate += props.rates[i].Rate;
        if(props.rates[i].User === "ThisUser"){
            return (
                <div className="rate">
                    <span>
                        {createStarIcons(props.rates[i].Rate)}
                    </span>
                    {createStarBorderIcons(5 - props.rates[i].Rate)}
                </div>
            );
        }
        }
        currentRate /= props.rates.length;
        return (
            <div className="rate">
                {createStarIcons(Math.round(currentRate))}
                {createStarBorderIcons(5 - Math.round(currentRate))}
            </div>
        );
    }
    
    return (
        <div className="rate">
            {showRate()}
        </div>
    );
}

export default RecipeListView;