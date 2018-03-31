import React from 'react';
import './SignForm.css';

import SignUp from "./SignUp";
import SignIn from "./SignIn";

import { Switch, Route, Redirect} from 'react-router';
import {withRouter} from "react-router-dom";

const SignInBtn = withRouter(({ history }) => (
    <button
        type="button"
        className="btn btn-primary signInBtn"
        onClick={() => { history.push('/signIn') }}
    >
        Sign in
    </button>
));

const SignUpBtn = withRouter(({ history }) => (
    <button
        type="button"
        className="btn btn-primary signUpBtn"
        onClick={() => { history.push('/signUp') }}
    >
        Sign Up
    </button>
));

const Sign = () => (
    <div className="Sign row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6 mainDivContainer">
            <div className="mainDiv">
                <img src="./images/securechat.png" width="100px"/>
                <h1 className="welcomeText">Welcome to <i><b className='greenLetters'>HS</b></i> chat</h1>
                <div className="signInUpBtns">
                    <SignInBtn />
                    <SignUpBtn />
                </div>
                <Switch>
                    <Route path='/signIn' component={SignIn}/>
                    <Route path='/signUp' component={SignUp}/>
                    <Redirect from="/" to="/signIn"/>
                </Switch>
            </div>
        </div>
        <div className="col-sm-3"></div>
    </div>
);

export default Sign;