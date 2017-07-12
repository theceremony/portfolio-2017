import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import {} from 'react-scroll';
import logo from './logo.svg';
import './App.css';

const Navigation = (props) => (
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/About">About</Link></li>
    <li><Link to="/Work">Work</Link></li>
  </ul>
);

const Page = ({ title }) => (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{title}</h2>
      </div>
      <Navigation />
    </div>
);

const Home = (props) => (
    <Page title="Home"/>
);

const About = (props) => (
  <Page title="About"/>
);

const Work = (props) => (
  <Page title="Work"/>
);

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
