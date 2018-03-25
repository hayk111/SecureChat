import React from 'react';
import './SignForm.css';

const SignUp = () => (
    <div id='sign-up' align="center">
        <form name='form-sign0up'>
            <span className="fontawesome-user"></span>
            <input type="text" id="user" placeholder="Username" required/>

            <span className="fontawesome-phone"></span>
            <input type="text" id="phone" placeholder="Enter your phone" required/>

            <span className="fontawesome-lock"></span>
            <input type="password" id="pass" placeholder="Password" required/>

            <span className="fontawesome-lock"></span>
            <input type="password" id="rep-pass" placeholder="Repeat password" required/>

            <input type="submit" value="Sign Up"/>
        </form>
    </div>
);

export default SignUp;