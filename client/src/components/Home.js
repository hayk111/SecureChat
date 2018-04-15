import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import './Home.css';
import Sidebar from './Sidebar';
import Main from './Main';

const Home = (props) => {
    if(!localStorage.getItem('currentUser')) {
        props.signOut();
        window.location.reload();
    } else {
        var currUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    return (
        <div id='home' className='row clearfix'>
            <div className='col-sm-3 nopadding'>
                <Sidebar signOut={props.signOut}/>
            </div>
            <div className='col-sm-9 nopadding'>
                <Main />
            </div>
        </div>
    )
};

export default Home;