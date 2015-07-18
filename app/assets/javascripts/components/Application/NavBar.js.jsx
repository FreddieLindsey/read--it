import React from 'react';
import DropdownToggle from "./DropdownToggle.js.jsx";

class NavBar extends React.component {
  displayName: "NavBar"

  getInitialState() {
    return {
      links: this.props.links,
      rootPath: this.props.root_path || "/",
      sitename: this.props.sitename || "Site has no name!"
    };
  }

  getLinks() {
    if (this.state.links != null) {
      return (this.state.links.map(function (link) {
        return (link.dropdown) ?
          (<li key={link.title}><DropdownToggle title={link.title}
          dropdown={link.dropdown}/></li>) :
          (<li key={link.title}><a href={link.url}>{link.title}</a></li>);
        }));
    } else { 
      return (<div/>); 
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
            <a className="navbar-brand" href={this.state.root_path}>{this.state.sitename}</a>
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

export default NavBar;
