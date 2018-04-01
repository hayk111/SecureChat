import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { isAuth } from './helpers';
import './App.css';

import Sign from './components/Sign';
import Home from './components/Home';
import SignIn from "./components/SignIn";

class App extends Component {
    componentDidMount() {
        isAuth().then((resp) => {
            console.log('resp!', resp);
            this.isLogged = resp.data.authenticated;
            this.resolved = true;

            console.log('isLoggedIn in App2', this.isLogged);
            this.forceUpdate();
        });
        console.log('isLoggedIn in App1', this.isLogged);
    }
  render() {
      return this.resolved ? (
          <div className="App">
              <div className="container-fluid">
                  <Switch>
                      <Route exact path='/home' render={() => (
                          this.isLogged ? (
                              <Home/>
                          ): (
                              <Sign/>
                          )
                      )
                      }/>
                      <Route path='/' component={Sign}/>
                  </Switch>
              </div>
          </div>
      ) : (
          <div className="App">
              <div align="center">
                  <h3 className='renderingH3'>Rendering...</h3>
              </div>
          </div>
      );
  }
}

export default App;
