import React from 'react';
import axios from 'axios';
import './SignForm.css';
import SignInForm from './SignInForm';

let signInErr;
const signInReqest = function(values) {
    console.log(values);
};

const SignIn  = (props) => {
    console.log('props:', props);/*signInReqest*/
    return (
        <div id='login' align="center">
            <SignInForm onSubmit={props.signIn}/>
        </div>
    )};
export default SignIn;