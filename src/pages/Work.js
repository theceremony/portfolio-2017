// ----------------------------------
import React, { Component } from 'react';
import {Page} from '../common';
import './Work.css';
// ----------------------------------

class WorkPage extends Component {


  render(){

    return(
      <Page title="work" pageClass="WorkPage">
        <div class="">
          <a href="">here is that stuff</a>
        </div>
      </Page>
    )
  }
}


class WorkItem extends Component {
  // ----------------------------------
  handleClick(event){
    console.log(event);
    console.log("what's the deal bro");
  }
  render(){
    console.log(this.props.project);
    return(
        <div id={this.props.project.projectId} onClick={this.handleClick} data-slug={this.props.project.projectId} className="work-item col-xs-12 col-sm-8 col-md-6 col-lg-4">
          <div className="work-title">
            <h2>{this.props.project.projectName}</h2>
            <p>{this.props.project.projectSubHead}</p>
          </div>
          <img alt={this.props.project.clientName} src={"/img/work/" + this.props.project.mediaFolder + "/thumb.jpg"} />
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
      <Page title="Work" pageClass="Work">
        <div className="row">
        {this.workLayoutMap()}
        </div>
      </Page>
    )
  }
};
