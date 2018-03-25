import React, { Component } from 'react';
import { Switch, Route, Redirect} from 'react-router';
import { withRouter } from 'react-router-dom'
import './App.css';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

class App extends Component {
  render() {
      const SignInBtn = withRouter(({ history }) => (
          <button
              type="button"
              className="btn btn-primary signInBtn"
              onClick={() => { history.push('/signIn') }}
          >
              Sign in
          </button>
      ));

      const SignUpBtn = withRouter(({ history }) => (
          <button
              type="button"
              className="btn btn-primary signUpBtn"
              onClick={() => { history.push('/signUp') }}
          >
              Sign Up
          </button>
      ));

    return (
      <div className="App">
          <div className="container-fluid">
              <div className="row">
                  <div className="col-sm-3"></div>
                  <div className="col-sm-6 mainDivContainer">
                      <div className="mainDiv">
                          <img src="./images/securechat.png" width="100px"/>
                          <h1 className="welcomeText">Welcome to <i><b className='greenLetters'>HS</b></i> chat</h1>
                          <div className="signInUpBtns">
                              <SignInBtn />
                              <SignUpBtn />
                          </div>
                          <Switch>
                              <Route path='/signIn' component={SignIn}/>
                              <Route path='/signUp' component={SignUp}/>
                              <Redirect from="/" to="/signIn" />
                          </Switch>
                      </div>
                  </div>
                  <div className="col-sm-3"></div>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
