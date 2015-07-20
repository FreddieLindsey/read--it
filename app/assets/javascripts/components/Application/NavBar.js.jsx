import React from "react";
import DropdownToggle from "./DropdownToggle.js.jsx";

const displayName = "NavBar";
const propTypes = {};

export default class NavBar extends React.Component {

  getLinks() {
    if (this.props.links != null) {
      return (this.props.links.map(function (link) {
        if (link.dropdown) {
          return (<li key={link.title}><DropdownToggle title={link.title} dropdown={link.dropdown}/></li>);
        } else {
          return (<li key={link.title}><a href={link.url}>{link.title}</a></li>);
        }
        }));
    } else {
      return (<div></div>);
    }
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top navbar-inverse" id='navbar'>
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
             data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href={this.props.root_path}>{this.props.sitename}</a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              {this.getLinks()}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

NavBar.displayName = displayName;
NavBar.propTypes = propTypes;
