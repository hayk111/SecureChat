import React, { Component } from 'react';
import { Switch, Route} from 'react-router';
import './App.css';

import Sign from './components/Sign';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="container-fluid">
              <Switch>
                  <Route path='/home' component={Home}/>
                  <Route path='/' component={Sign}/>
              </Switch>
          </div>
      </div>
    );
  }
}

export default App;
