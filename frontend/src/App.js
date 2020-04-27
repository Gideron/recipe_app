import React from 'react';
import logo from './logo.svg';

//material icons
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';

import './App.css';

//mockup data
import RecipeData from './mockup_data/RecipeList.json'

class NavigationBar extends React.Component {
  render() {
    return (
      <nav>
        <a id="menu-button" href="index.html"><MenuIcon /></a>
        <a id="profile-button" href="profile.html"><PersonIcon /></a>
      </nav>
    );
  }
}

class RecipeListApp extends React.Component {
  render() {
    return (
      <div id="content">
        <h1>Recipes/Bookmarks</h1>
        <RecipeList />
      </div>
    );
  }
}

class RecipeList extends React.Component {
  render() {
    return (
      <ul class="recipe-list">
        {RecipeData.map(recipe => (
          <li class="recipe-element" key={recipe.id}>
            <div class="recipe-header">
                <h2>{recipe.Title}</h2>
                <a class="bookmark-button"><BookmarkIcon /></a>
            </div>
            <RateElement rates={recipe.Rates}/>
            <img class="recipe-img" src={recipe.Picture} alt="picture of food" />
          </li>
        ))}
      </ul>
    );
  }
}

//TODO: add key to icons
class RateElement extends React.Component {
  constructor(props) {
    super(props);
    this.currentRate = 0;
  }
  showRate() {
    this.currentRate = 0;
    console.log(this.props.rates)
    for(var i = 0; i < this.props.rates.length; i++) {
      this.currentRate += this.props.rates[i].Rate;
      if(this.props.rates[i].User == 'ThisUser'){
        return (
          <a>
            <span>
              _.times({this.props.rates[i].User.Rate}, (y) => {
                <StarIcon />
              });
            </span>
            _.times({5 - this.props.rates[i].User.Rate}, (y) => {
                <StarBorderIcon />
              });
          </a>
        );
      }
    }
    console.log(this.currentRate)
    this.currentRate /= this.props.rates.length;
    console.log(this.currentRate)
    console.log(Math.round(this.currentRate))
    return (
      <a>
        _.times({Math.round(this.currentRate)}, (y) => {
          <StarIcon />
        });
        _.times({5 - Math.round(this.currentRate)}, (y) => {
          <StarBorderIcon />
        });
      </a>
    );
  }

  /* _(Math.round(this.currentRate)).times(idx => <StarIcon />);*/
  render() {
    return (
      <div class="rate">
        {this.showRate()}
      </div>
    );
  }
}








function App() {
  return (
    <div className="App">
      <NavigationBar />
      <RecipeListApp />
    </div>
  );
}

export default App;
