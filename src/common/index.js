import React, { Component } from 'react';
import { Link } from 'react-router';
// import logo from '../logo.svg';

export class Navigation extends Component {
  render() {
    return (
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Work">Work</Link></li>
      </ul>
    )
  }
};

export class Page extends Component {
    render() {
      return (
        <div className="App">
          <Navigation />
          <div className="content-container">
            { this.props.children }
          </div>
        </div>
      )
    }
};
