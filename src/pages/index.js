import React, { Component } from 'react';
import {Page} from '../common';

import projectJSON from '../data/projects.json';

export class Home extends Component {
  render() {

    return (
      <Page title="Home">
        <h1>Art</h1>
        <h1>Code</h1>
        <h1>Theory</h1>
        <h4>Creative Technologist - Designer -  installation artist</h4>
        <div>Jeramy Morrill</div>
      </Page>

    )
  }
};

class WorkItem extends Component {
  render(){
      return(
        <div id={this.props.project.projectId} className="work-item">
          <h2>{this.props.project.clientName}</h2>
          <h3>{this.props.project.projectSubHead}</h3>
          <img src={"/img/work/" + this.props.project.mediaFolder + "/main.jpg"} />
        </div>
      )
  }
}

export class Work extends Component {
  render() {
    console.log(projectJSON)
    return (
      <Page title="Work">
        {projectJSON.map((project, index) =>{
           return <WorkItem
              key={ index }
              project={project}
            />;
         })}
      </Page>
    )
  }
};



export class About extends Component {
  render() {
    return (
      <Page title="About">
        <h3>test one</h3>
      </Page>
    )
  }
};
