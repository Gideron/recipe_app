import React from 'react';
//material icons
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import RateElement from './RateElement'

import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from "apollo-boost"

const GET_RECIPE = gql`
  query GetRecipe($recipeId: ID!) {
    getRecipe(recipeId: $recipeId) {
        id
        username
        description
        title
        steps
        difficulty
        cookingTime
        comments {id, username, body, createdAt}
        rates {id, username, rate}
        category {id, title}
    }
  }
`;
const CREATE_COMMENT = gql`
mutation createComment ($recipeId: String!, $comment: String!){
    createComment(recipeId:$recipeId,
      body:$comment)
    {id, comments{id,username,body}}
  }
`;

const RecipeView = ({match}) => {
    const recipeId = match.params.recipeId;
    const { loading, error, data } = useQuery(GET_RECIPE, {
        variables: { recipeId },
    })

    if (loading) return <p>Loading...</p>;
    if (error) {
        return (
            <div className="content">
                <h1 style={{color: "red"}}>Recipe not found</h1>
            </div>
        );
    }

    return (
        <div className="content">
            <RecipeContent recipe={data.getRecipe} />
        </div>
    );
}

const RecipeContent = (props) => {
    var loggedin = false;
    var bookmarked = false;

    return (
        <div className="recipe-view">
            <div className="recipe-view-header">
                <h1>{props.recipe.title} <span>ID: {props.recipe.id}</span></h1>
                <button className="bookmark-button">{loggedin&&bookmarked ?  <BookmarkIcon /> : <BookmarkBorderIcon />}</button>
            </div>
            <RateElement rates={props.recipe.rates}/>
            <div className="recipe-view-img-holder">
                <img className="recipe-img" src={props.recipe.picture? props.recipe.picture : "https://via.placeholder.com/300x150"} alt="food" />
            </div>
            <h3>Description:</h3>
            <p>{props.recipe.description}</p>
            <h3>Steps:</h3>
            <p>{props.recipe.steps}</p>
            <h3>Comments:</h3>
            <CommentForm recipeId={props.recipe.id} />
            {props.recipe.comments && props.recipe.comments.length > 0 ? props.recipe.comments.map((comment) => (
                <div key={"comment"+comment.id} className="recipe-comment">
                    <h4>{comment.username}: <span>-{comment.createdAt}</span></h4>
                    <p>{comment.body}</p>
                </div>
            )) : <p>No Comments</p>}
        </div>
    );
}

const CommentForm = (props) => {
    let inputComment;
  
    const [createComment, { data }] = useMutation(CREATE_COMMENT);
  
    if(data){
        window.location.reload(false);
    } 
      
    return (
      <form onSubmit={e => {
        e.preventDefault();
        createComment({ variables: { recipeId: props.recipeId, comment: inputComment.value} });
        console.log("login form submit");
        }}>
          <input
          type='text'
          placeholder="Enter Comment"
          required
          ref={node => {
            inputComment = node;
          }}
          />
          <input type='submit' value="Comment"/>
      </form>
    );
  }

export default RecipeView;