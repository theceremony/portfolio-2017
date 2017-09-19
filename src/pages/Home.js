import React, { Component } from 'react';
import {Page} from '../common';
import './Home.css';

export class Home extends Component {
  render() {
    return (
      <Page title="Home" className="Home">
        <div className="Home-Container">
          <h1>Art</h1>
          <h1>Code</h1>
          <h1>Theory</h1>
          <h4>Creative Technologist - Designer -  installation artist</h4>
          <div>Jeramy Morrill</div>
        </div>
      </Page>
    )
  }
};
