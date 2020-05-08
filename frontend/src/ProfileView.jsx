import React from 'react';
import {Link} from "react-router-dom";

//mock data
import UserData from './mockup_data/UserList.json'

const ProfileView = ({match}) => {
    if(match && match.params.userId){
        return (
            <div className="content">
                <ProfileContent user={UserData.find(usr => usr.id === match.params.userId)} />
            </div>
        );
    }
    return (
    <div className="content">
        <h1>Profile not found</h1>
    </div>
    );
}

const ProfileContent = (props) => {
    return (
        <div className="profile-view">
            <h1>{props.user.name} <span>ID: {props.user.id}</span></h1>
            <Link to={"/recipes/user/"+props.user.id}>{props.user.name}'s Recipes</Link>
            <Link to={"/recipes/bookmarks/"+props.user.id}>{props.user.name}'s Bookmarks</Link>
            <br/>
            <Link to="/create/category">Create Category</Link>
            <Link to="/create/recipe">Create Recipe</Link>
        </div>
    );
}

export default ProfileView;