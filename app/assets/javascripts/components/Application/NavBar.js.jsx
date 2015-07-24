import React from "react";
import DropdownToggle from "./DropdownToggle.js.jsx";
require("../../../stylesheets/Application/navbar.sass");
require("../../../stylesheets/Application/hamburger.sass");

const displayName = "NavBar";
const propTypes = {};

export default class NavBar extends React.Component {

  getLinks() {
    if (this.props.links != null) {
      return (this.props.links.map(function (link) {
        if (link.dropdown) {
          return (<DropdownToggle key={link.title} title={link.title} dropdown={link.dropdown} />);
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
      <div className="navbar">
        <div className="navbar-left">
          <div className="navbar-brand">
            <a href={this.props.rootPath}>{this.props.sitename}</a>
          </div>
        </div>
        <div className="navbar-right">
          <ul>
            {this.getLinks()}
          </ul>
        </div>
        <div className="mobile-menu">
        </div>
      </div>
    );
  }
}

NavBar.displayName = displayName;
NavBar.propTypes = propTypes;
