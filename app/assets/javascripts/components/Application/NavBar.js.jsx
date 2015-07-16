var React = require('react');

var NavBar = React.createClass({
  displayName: 'NavBar',

  getInitialState: function () {
    return {
      sitename: this.props.sitename || "Site has no name!",
      root_path: this.props.root_path || "/",
      links: this.props.links
    }
  },

  getLinks: function () {
    if (this.state.links != null) {
      return (this.state.links.map(function (link) {
        if (link.dropdown) {
          return (<li key={link.title}><DropdownToggle title={link.title} dropdown={link.dropdown}/></li>)
        } else if (link.url) {
          return (<li key={link.title}><a href={link.url}>{link.title}</a></li>)
        }
      }));
    } else { return (<div></div>); }
  },

  render: function () {
    return (
      <nav className="navbar navbar-default navbar-static-top navbar-inverse" id='navbar'>
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
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
});

module.exports = NavBar;
