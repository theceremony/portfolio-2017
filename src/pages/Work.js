import React, { Component } from 'react';
import {Page} from '../common';
import './Work.css';

import projectJSON from '../data/projects.json';

class WorkItem extends Component {
  render(){
      return(
        <div id={this.props.project.projectId} className="work-item">
          <h2>{this.props.project.clientName}</h2>
          <h3>{this.props.project.projectSubHead}</h3>
          <img alt={this.props.project.clientName} src={"/img/work/" + this.props.project.mediaFolder + "/main.jpg"} />
        </div>
      )
  }
}

export class Work extends Component {
  render() {
    let projects = projectJSON.map((project, index) => {
       return <WorkItem key={ index } project={project} />;
    });
    return (
      <Page title="Work">{projects}</Page>
    )
  }
};
