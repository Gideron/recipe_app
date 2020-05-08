import React from 'react';

import { useMutation } from '@apollo/react-hooks';
import { gql } from "apollo-boost"

const CREATE_CATEGORY = gql`
mutation category($title: String!){
    addCategory(title:$title){id,title}
}
`;
const CreateCategoryView = ({match}) => {
    let input;
    const [addTodo, { data }] = useMutation(CREATE_CATEGORY);

    return (
        <div className="content">
            <h1>Create new category</h1>
            <form onSubmit={e => {
            e.preventDefault();
            addTodo({ variables: { title: input.value } });
            input.value = '';
            alert("Category created! Page might need a reload");
            }}>
                <p>Category name:</p>
                <input type='text' placeholder="Name" required ref={node => {
                    input = node;
                }}/>
                
                <input type='submit' value="Create"/>
            </form>
        </div>
    );
}

export default CreateCategoryView;