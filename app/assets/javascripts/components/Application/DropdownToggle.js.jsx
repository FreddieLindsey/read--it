import React from 'react';

class DropdownToggle extends React.component {
  displayName: 'DropdownToggle'

  getLinks() {
    if (this.props.dropdown != null) {
      return (this.props.dropdown.map(function (link) {
        return (link.divider) ?
          (<li key={link.divider} role="separator" className="divider"></li>) :
          (<li key={link.title}><a href={link.url}>{link.title}</a></li>);
      }));
    } else {
      return (<div key={null}></div>);
    }
  }

  render() {
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

};

export default DropdownToggle;
