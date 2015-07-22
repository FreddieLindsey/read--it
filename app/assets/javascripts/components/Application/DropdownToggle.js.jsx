import React from "react";
require("../../../stylesheets/Application/dropdown.sass");

const displayName = "DropdownToggle";
const propTypes = {};

export default class DropdownToggle extends React.Component {

  getLinks() {
    if (this.props.dropdown != null) {
      return (this.props.dropdown.map(function (link) {
        if (link.divider) {
          return (<hr></hr>);
        } else {
          return (<li key={link.title}><a href={link.url}>{link.title}</a></li>);
        }
      }));
    } else {
      return (<div key={null}></div>);
    }
  }

  render() {
    return (
      <li>{this.props.title + " "}
        <i className="fa fa-angle-down"></i>
        <ul>
          {this.getLinks()}
        </ul>
      </li>
    );
  }

}

DropdownToggle.displayName = displayName;
DropdownToggle.propTypes = propTypes;
