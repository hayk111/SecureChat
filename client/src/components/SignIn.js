import React from 'react';
import axios from 'axios';
import './SignForm.css';
import SignInForm from './SignInForm';

let signInErr;
const signInReqest = function(values) {
    console.log(values);

    axios.post('http://localhost:5000/signin', {...values})
        .then(response => {
            console.log('ok1:', response);
            if(response.data.message) {
                document.getElementsByClassName('signInFailed')[0].innerHTML = 'Incorrect username or password';
            } else {
                window.location.href = '/home';
            }
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