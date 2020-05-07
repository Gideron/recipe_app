import React from 'react';
import ReactDOM from 'react-dom';

class LoginView extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loginusername: '',
        loginpassword: '',
        loginerrormessage: '',
        signupemail: '',
        signupusername: '',
        signuppassword: '',
        signuperrormessage: ''
      };
    }
    loginSubmitHandler = (event) => {
        event.preventDefault();
        console.log("login, usr: '" + this.state.username + "' pwr:'" +this.state.password + "'");

        var qglerror = "gql error";
        let err = '';
        if (qglerror) {
            err = <strong>Error logging in</strong>;
        }
        this.setState({loginerrormessage: err});
    }
    signupSubmitHandler = (event) => {
        event.preventDefault();
        console.log("sign up, usr: '" + this.state.username + "' pwr:'" +this.state.password + "'");

        var qglerror = "gql error";
        let err = '';
        if (qglerror) {
            err = <strong>Error signing up</strong>;
        }
        this.setState({signuperrormessage: err});
    }
    inputChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      
      this.setState({[nam]: val});
    }
    render() {
      return (
        <div className="content">
            <div className="login-view">
                <h1>Login</h1>
                <form onSubmit={this.loginSubmitHandler}>
                    
                    <p>Username:</p>
                    <input
                    type='text'
                    placeholder="Enter Username"
                    name='loginusername'
                    required
                    onChange={this.inputChangeHandler}
                    />
                    <p>Password:</p>
                    <input
                    type='password'
                    placeholder="Enter Password"
                    name='loginpassword'
                    required
                    onChange={this.inputChangeHandler}
                    />
                    {this.state.loginerrormessage}
                    <input type='submit' value="Login"/>
                </form>

                <br/>

                <h1>Sign up</h1>
                <form onSubmit={this.signupSubmitHandler}>
                    
                    <p>Email:</p>
                    <input
                    type='email'
                    placeholder="Enter Email"
                    name='signupemail'
                    required
                    onChange={this.inputChangeHandler}
                    />
                    <p>Username:</p>
                    <input
                    type='text'
                    placeholder="Enter Username"
                    name='signupusername'
                    required
                    onChange={this.inputChangeHandler}
                    />
                    <p>Password:</p>
                    <input
                    type='password'
                    placeholder="Enter Password"
                    name='signuppassword'
                    required
                    onChange={this.inputChangeHandler}
                    />
                    {this.state.signuperrormessage}
                    <input type='submit' value="Sign up"/>
                </form>
            </div>
        </div>
      );
    }
  }
  
  ReactDOM.render(<LoginView />, document.getElementById('root'));
  export default LoginView;