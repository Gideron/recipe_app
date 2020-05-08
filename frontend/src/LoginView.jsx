import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom'

import { useMutation } from '@apollo/react-hooks';
import { gql } from "apollo-boost"

const LOGIN = gql`
mutation Login($uname: String!, $pwrd: String!) {
	login(username:$uname, password:$pwrd){id, token}
}
`;

const SIGNUP = gql`
mutation Signup($email: String!, $uname: String!, $pwrd: String!){
  register(registerInput:{
    email: $email
    username: $uname
    password: $pwrd
    confirmPassword: $pwrd
  }){
    id
    token
  }
}
`;

const LoginView = () => {
  return (
    <div className="content">
      <div className="login-view">
          <LoginForm />
          <br/>
          <SignUpForm />
        </div>
    </div>
  );
}

const LoginForm = () => {
  let inputLoginUser;
  let inputLoginPass;

  const [userLogin, { data }] = useMutation(LOGIN);

  if(data && data.login){
    localStorage.setItem('token', data.login.token);
    console.log("login data t:"+data.login.token+" id:"+data.login.id);
    return <Redirect to='/' />
  } 
    
  return (
    <form onSubmit={e => {
      e.preventDefault();
      userLogin({ variables: { uname: inputLoginUser.value, pwrd: inputLoginPass.value} });
      console.log("login form submit");
      }}>
        <h1>Login</h1>
        <p>Username:</p>
        <input
        type='text'
        placeholder="Enter Username"
        required
        ref={node => {
          inputLoginUser = node;
        }}
        />
        <p>Password:</p>
        <input
        type='password'
        placeholder="Enter Password"
        required
        ref={node => {
          inputLoginPass = node;
        }}
        />
        <input type='submit' value="Login"/>
    </form>
  );
}

const SignUpForm = () => {
  let inputSignupEmail;
  let inputSignupUser;
  let inputSignupPass;

  const [userSignup, { data }] = useMutation(SIGNUP);

  if(data && data.register){
    localStorage.setItem('token', data.register.token);
    console.log("sign up data t:"+data.register.token+" id:"+data.register.id);
    return <Redirect to='/' />
  } 
    
  return (
    <form onSubmit={e => {
      e.preventDefault();
      userSignup({ variables: { email: inputSignupEmail.value, uname: inputSignupUser.value, pwrd: inputSignupPass.value} });
      console.log("sign up form submit");
      }}>
        <h1>Sign up</h1>
        <p>Email:</p>
        <input
        type='email'
        placeholder="Enter Email"
        required
        ref={node => {
          inputSignupEmail = node;
        }}
        />
        <p>Username:</p>
        <input
        type='text'
        placeholder="Enter Username"
        required
        ref={node => {
          inputSignupUser = node;
        }}
        />
        <p>Password:</p>
        <input
        type='password'
        placeholder="Enter Password"
        required
        ref={node => {
          inputSignupPass = node;
        }}
        />
        <input type='submit' value="Sign up"/>
    </form>
  );
}

export default LoginView;