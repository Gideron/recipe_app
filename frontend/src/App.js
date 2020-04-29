import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import NavigationElement from './NavigationElement.jsx';
import RecipeListApp from './RecipeListApp.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationElement />
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
