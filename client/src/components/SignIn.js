import React from 'react';
import axios from 'axios';
import './SignForm.css';
import SignInForm from './SignInForm';

const signInReqest = function(values) {
    console.log(values);

    axios.post('http://localhost:5000/signin', {...values})
        .then(response => {
            console.log('ok:', response);
        })
        .catch(err => {
            console.error(err);
        });
};

const SignIn  = (props) => (
    <div id='login' align="center">
        <SignInForm onSubmit={signInReqest}/>
    </div>
);
export default SignIn;