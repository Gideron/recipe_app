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
import LoginView from './LoginView.jsx';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
const client = new ApolloClient({
  uri: 'http://localhost:3030/',
});

function App() {
  return (
    <div className="App">
      <Router>
        <ApolloProvider client={client}>
          <NavigationElement />
          <Switch>
            <Route exact path="/" component={RecipeListView} />
            <Route path="/recipes/:category?" component={RecipeListView} />
            <Route path="/recipe/:recipeId?" component={RecipeView} />
            <Route exact path="/profile/:userId?" component={ProfileView} />
            <Route path="/login" component={LoginView} />
          </Switch>
        </ApolloProvider>
      </Router>
    </div>
  );
}

export default App;
