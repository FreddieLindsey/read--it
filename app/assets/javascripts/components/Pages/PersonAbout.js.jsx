var React = require('react');

var PersonAbout = React.createClass({
  displayName: 'PersonAbout',

  getInitialState: function () {
    return {
      name: this.props.name,
      image: this.props.image,
      url: this.props.url
    };
  },

  render: function () {
    return (
      <div className='col-xs-12 col-sm-6 col-md-4 about-profile'>
        <h2>{this.state.name}</h2>
        <img alt={this.state.name} src={this.state.image}/>
        <h4><a href={this.state.url}>Visit me!</a></h4>
      </div>
    );
  }
});

module.exports = PersonAbout;
