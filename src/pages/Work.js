// ----------------------------------
import React, { Component } from 'react';
import {Page} from '../common';
import './Work.css';
// ----------------------------------

class WorkItem extends Component {
  // ----------------------------------
  render(){
      console.log(this.props.project);
      return(
        <div id={this.props.project.projectId} className="work-item">
          <div className="work-title">
            <h1>{this.props.project.clientName}</h1>
            <p>{this.props.project.projectSubHead}</p>
          </div>
          <img alt={this.props.project.clientName} src={"/img/work/" + this.props.project.mediaFolder + "/main.jpg"} />
        </div>
      )
  }
}

export class Work extends Component {
  // ----------------------------------
  workLayoutMap() {
    return this.props.route.projectJSON.map((project, index) => {
       return <WorkItem key={ index } project={project} />;
    });
  }
  // ----------------------------------
  render() {
    return (
      <Page title="Work" pageClass="Work">{this.workLayoutMap()}</Page>
    )
  }
};
