import React from 'react';
import './SignForm.css';
import SignUpCompleteForm from './SignUpCompleteForm';

const SignUpLastStep  = (props) => {
    console.log('SignUpLastStep props:', props);
    const currentSignUser = localStorage.getItem('currentSignUser');

    if(currentSignUser) {
        console.log('currentSignUser:', currentSignUser);
    } else {
        window.location.href = '/signIn';
    }
    return (
        <div id='SignUpLastStep' align="center">
            <div id='sign-up-completed' align="center">            
                <SignUpCompleteForm onSubmit={props.signUpComplete}/>
            </div>
        </div>
    )};
export default SignUpLastStep;