//------------------------------------------------------------------------------
import React, { Component } from 'react';
import { Link } from 'react-router';
import './index.css';
import 'flexboxgrid';
//------------------------------------------------------------------------------
export class Navigation extends Component {

  constructor(props) {
      super(props);
      this.state = {
          isHidden : false
      };
      this.handleInputChange = this.handleInputChange.bind(this);
      this.toggleIsHiddenInputValue = this.toggleIsHiddenInputValue.bind(this);
  }

  handleInputChange (event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  toggleIsHiddenInputValue() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  render() {
    const { isHidden } = this.state;
    return (
      <nav id="Main-Navigation">
        <div id="Main-Menu-Toggle">
          <input
            id="Main-Menu-Toggle-Input"
            type="checkbox"
            name="isHidden"
            checked={isHidden}
            onChange={this.handleInputChange}
          />
          <span></span>
          <span></span>
          <span></span>

          <div id="Main-Menu">
            <ul>
              <li><Link to="/" onClick={this.toggleIsHiddenInputValue}>Home</Link></li>
              <li><Link to="/About" onClick={this.toggleIsHiddenInputValue}>About</Link></li>
              <li><Link to="/Work" onClick={this.toggleIsHiddenInputValue}>Work</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
};

export class Page extends Component {
    render() {
      console.log(this.props.pageClass);
      return (
        <div className={"Page " + this.props.pageClass}>
          <div className="content-container">{ this.props.children }</div>
        </div>
      )
    }
};

export class PageContainer extends Component {
  render() {
    return(
      <div className="Page-Container">
        <Navigation />
        { this.props.children }
      </div>
    )
  }
};
