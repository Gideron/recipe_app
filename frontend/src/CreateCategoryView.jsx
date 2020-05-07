import React from 'react';

import { useMutation } from '@apollo/react-hooks';
import { gql } from "apollo-boost"

const CREATE_CATEGORY = gql`
mutation category($title: String!){
    addCategory(title:$title){id,title}
}
`;
const CreateCategoryView = ({match}) => {
    return (
        <div className="content">
            <h1>Create new category</h1>
            <form>
                <p>Category name:</p>
                <input type='text' placeholder="Name" required/>
                
                <input type='submit' value="Create"/>
            </form>
        </div>
    );
}

export default CreateCategoryView;