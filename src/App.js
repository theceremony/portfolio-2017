import React, { Component } from 'react';
import { Router, browserHistory, Route } from 'react-router';
import {Work} from './pages/Work';
import {About} from './pages/About';
import {Home} from './pages/Home';
import {PageContainer} from './common';
import './App.css';
import ProjectJSON from './data/projects.json';


class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route component={PageContainer}>
          <Route path="/" component={Home} projectJSON={ProjectJSON} />
          <Route path="/About" component={About} projectJSON={ProjectJSON} />
          <Route path="/Work" component={Work} projectJSON={ProjectJSON} />
        </Route>
      </Router>
    );
  }
}

export default App;
