import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//material icons
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
//import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

import './App.css';
import RecipeListApp from './RecipeListApp.jsx';

class NavigationBar extends React.Component {
  render() {
    return (
      <nav>
        <Link id="menu-button" to="/recipes"><MenuIcon /></Link>
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
          <Route exact path="/" component={RecipeListApp} />
          <Route path="/recipes/:category?" component={RecipeListApp} />
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
