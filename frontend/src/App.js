import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
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
        <Link id="menu-button" to="/"><MenuIcon /></Link>
        <Link id="profile-button" to="profile"><PersonIcon /></Link>
      </nav>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/">
            <RecipeListApp />
          </Route>
          <Route exact path="/profile">
            <div id="content">
              <h1>PROFILE PAGE</h1>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
