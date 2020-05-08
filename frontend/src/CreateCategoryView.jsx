import React from 'react';
import { Redirect } from 'react-router-dom'

import { useMutation } from '@apollo/react-hooks';
import { gql } from "apollo-boost"

const CREATE_CATEGORY = gql`
mutation category($title: String!){
    addCategory(title:$title){id,title}
}
`;
const CreateCategoryView = ({match}) => {
    let input;
    const [addCategory, { data }] = useMutation(CREATE_CATEGORY);

    if(data && data.addCategory){
        alert("Page might need a reload after redirect");
        return <Redirect to='/' />
    } 

    return (
        <div className="content">
            <h1>Create new category</h1>
            <form onSubmit={e => {
            e.preventDefault();
            addCategory({ variables: { title: input.value } });
            input.value = '';
            
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