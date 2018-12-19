import React, { Component } from 'react';
import { Route, Switch  } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import About from './components/About'
import VideoContainer from './containers/VideoContainer'

class App extends Component {
  render() {
    return (
      <Switch>
        
        {/*Root route*/}
        <Route 
          exact 
          path="/"
          component={Home}
        />
        
        <Route 
          exact 
          path="/Videos"
          component={VideoContainer}
        />
        
        <Route 
          exact 
          path="/About"
          component={About}
        />
       
      </Switch>
      
    );
  }
}

export default App;
