import React from 'react';

const LoginView = (props) => {
    return (
        <div className="content">
            
            <ul className="login-view">
                <h1>Login:</h1>
                <li>
                    <label htmlFor="uname"><b>Username</b></label>
                </li>
                <li>
                    <input type="text" placeholder="Enter Username" name="uname" required />
                </li>
                <li>
                    <label htmlFor="psw"><b>Password</b></label>
                </li>
                <li>
                    <input type="password" placeholder="Enter Password" name="psw" required />
                </li>

                <button className="login-button">Login</button>

                <div className="login-view-or"><h2>OR</h2></div>

                <h1>Sign up:</h1>
                <li>
                    <label htmlFor="uname"><b>Username</b></label>
                </li>
                <li>
                    <input type="text" placeholder="Enter Username" name="uname" required />
                </li>
                <li>
                    <label htmlFor="email"><b>Email</b></label>
                </li>
                <li>
                    <input type="email" placeholder="Enter Email" name="email" required />
                </li>
                <li>
                    <label htmlFor="psw"><b>Password</b></label>
                </li>
                <li>
                    <input type="password" placeholder="Enter Password" name="psw" required />
                </li>
                <li>
                    <input type="password" placeholder="Confirm Password" name="psw-verify" required />
                </li>

                <button className="login-button">Sign up</button>
            </ul>
        </div>
    );
}

export default LoginView;