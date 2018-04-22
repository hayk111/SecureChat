import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import './Home.css';
import Sidebar from './Sidebar';
import Main from './Main';

class Home extends Component {
    render() {
        console.log('Home props::', this.props);
        if(!this.props.currUser) {
            this.props.getCurrentUser();
        }

        return this.props.currUser ? (
            <div id='home' className='row clearfix'>
                <div className='col-sm-3 nopadding'>
                    <Sidebar signOut={this.props.signOut} currUser={this.props.currUser}/>
                </div>
                <div className='col-sm-9 nopadding'>
                    <Main />
                </div>
            </div>
        ) : (
            <div id="home">
                <div align="center">
                    <h3 className='renderingH3'>Rendering...</h3>
                </div>
            </div>
        );
    }
    

    /*if(!localStorage.getItem('currentUser')) {
        props.signOut();
        window.location.reload();
    } else {
        var currUser = JSON.parse(localStorage.getItem('currentUser'));
    }*/
    
};

export default Home;