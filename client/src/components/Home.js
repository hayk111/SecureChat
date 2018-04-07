import React from 'react';
import axios from "axios/index";

const logOutReqest = function() {
    axios.post('http://localhost:5000/logout', {})
        .then(response => {
            console.log('log out response:', response.data);
            if(response.data.loggedOut) {
                window.location.reload();
            } else {
                console.log('Some error...');
            }
            console.log('Loging out...');
        })
        .catch(err => {
            console.error(err);
        });
};

const Home = () => (
    <div id='home' align="center">
        <h1 className='welcomeHome'>Welcome to Home!</h1>
        <br />
        <button className='btn btn-danger' onClick={logOutReqest}>Log out</button>
    </div>
);

export default Home;