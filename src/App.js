import React, { Component } from 'react';
import { Router, browserHistory, Route } from 'react-router';
import {Home, About, Work} from './pages';
import './App.css';



class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="/About" component={About}/>
        <Route path="/Work" component={Work}/>
      </Router>
    );
  }
}

export default App;
