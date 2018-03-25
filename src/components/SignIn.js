import React from 'react';
import './SignForm.css';

const SignIn = () => (

    <div id='login' align="center">
        <form name='form-login'>
            <span className="fontawesome-user"></span>
            <input type="text" id="user" placeholder="Username" required/>

            <span className="fontawesome-lock"></span>
            <input type="password" id="pass" placeholder="Password" required/>
            <input type="submit" value="Login"/>
        </form>
    </div>
);

export default SignIn;