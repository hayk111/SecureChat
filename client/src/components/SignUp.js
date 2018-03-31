import React from 'react';
import './SignForm.css';
import SignUpForm from './SignUpForm';
import axios from "axios/index";
import {withRouter} from "react-router-dom";

const signUpReqest = function(values) {
    console.log(values);

    axios.post('http://localhost:5000/signup', {...values})
        .then(response => {
            console.log('ok response comes:', response);
            if(response.data.hasOwnProperty('message')) {
                console.warn(response.data.message)
            } else {
                console.log('User added');

                window.location.href = '/home';
            }
        })
        .catch(err => {
            console.error(err);
        });
};

const SignUp = () => (
    <div id='sign-up' align="center">
        <div id='login' align="center">
            <SignUpForm onSubmit={signUpReqest}/>
        </div>
    </div>
);

export default SignUp;