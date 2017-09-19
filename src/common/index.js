import React, { Component } from 'react';
import { Link } from 'react-router';
// import logo from '../logo.svg';
import './index.css';

export class Navigation extends Component {
  render() {
    return (
      <nav className="Navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Work">Work</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
};

export class Page extends Component {
    render() {
      return (
        <div className={"Page " + this.props.className}>
          <div className="content-container">
            { this.props.children }
          </div>
        </div>
      )
    }
};

export class PageContainer extends Component {
  render() {
    return(
      <div className="page-container">
        <Navigation />
        { this.props.children }
      </div>
    )
  }
};
