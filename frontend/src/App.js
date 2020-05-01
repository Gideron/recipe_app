import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import NavigationElement from './NavigationElement.jsx';
import RecipeListView from './RecipeListView.jsx';
import RecipeView from './RecipeView.jsx';
import ProfileView from './ProfileView.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationElement />
        <Switch>
          <Route exact path="/" component={RecipeListView} />
          <Route path="/recipes/:category?" component={RecipeListView} />
          <Route path="/recipe/:recipeId?" component={RecipeView} />
          <Route exact path="/profile/:userId?" component={ProfileView} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
