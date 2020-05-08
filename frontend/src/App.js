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
import CreateRecipeView from './CreateRecipeView.jsx';
import CreateCategoryView from './CreateCategoryView.jsx';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

localStorage.setItem('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYjAxMWQwNThhOTRiMzk4ODMxNWNiOCIsImVtYWlsIjoicXdlQGFzZC5jb20iLCJ1c2VybmFtZSI6InRlc3RfdXNlciIsImlhdCI6MTU4ODk1NTQxMywiZXhwIjoxNTg4OTU5MDEzfQ.szAbtSPivlbYPSEBiwQIO6SGCOnZnCqOtOLJq_5RTSY");

const client = new ApolloClient({
  uri: 'http://localhost:3030/',
  request: (operation) => {
    const token = localStorage.getItem('token')

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  }
})


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
            <Route path="/create/recipe" component={CreateRecipeView}/>
            <Route path="/create/category" component={CreateCategoryView}/>
          </Switch>
        </ApolloProvider>
      </Router>
    </div>
  );
}

export default App;
