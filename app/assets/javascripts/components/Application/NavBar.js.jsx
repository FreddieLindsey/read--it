import React from "react";
import DropdownToggle from "./DropdownToggle.js.jsx";
require("../../../stylesheets/Application/navbar.sass");

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
          <ul>
            <li><a className="navbar-brand" href={this.props.rootPath}>
              {this.props.sitename}</a></li>
          </ul>
        </div>
        <div className="navbar-right">
          <ul>
            {this.getLinks()}
          </ul>
        </div>
      </div>
    );
  }
}

NavBar.displayName = displayName;
NavBar.propTypes = propTypes;
