import React from 'react';
//import logo from './logo.svg';

//material icons
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
//import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

import './App.css';
import RecipeListApp from './RecipeListApp.jsx';

//mockup data
//import RecipeData from './mockup_data/RecipeList.json'

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

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <RecipeListApp />
    </div>
  );
}

export default App;
