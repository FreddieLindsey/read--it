var React = require('react');

var DropdownToggle = React.createClass({
  displayName: 'DropdownToggle',

  getLinks: function () {
    if (this.props.dropdown != null) {
      return (this.props.dropdown.map(function (link) {
        if (link.divider) {
          return (<li key={link.divider} role="separator" className="divider"></li>)
        } else {
          return (<li key={link.title}><a href={link.url}>{link.title}</a></li>)
        }
      }));
    } else {
      return (<div key={null}></div>);
    }
  },

  render: function() {
    return (
      <li className='dropdown'>
        <a href="#" className="dropdown-toggle"
           data-toggle="dropdown" role="button"
           aria-haspopup="true" aria-expanded="false">{this.props.title}
          <span className="caret"></span>
        </a>
        <ul className="dropdown-menu">
          {this.getLinks()}
        </ul>
      </li>
    );
  }

});

module.exports = DropdownToggle;
