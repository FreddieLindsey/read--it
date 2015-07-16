var React = require('react');

var PostListing = React.createClass({
  displayName: 'PostListing',

  getInitialState: function () {
    return {
      id: this.props.id,
      url: this.props.url,
      title: this.props.title,
      content: this.props.content,
      username: this.props.username
    }
  },

  render: function () {
    return (
      <div>
        <div className='col-sm-1 post-listing-id'>{this.state.id}</div>
        <div className='col-sm-2 post-listing-title'><a href={this.state.url}>{this.state.title}</a></div>
        <div className='col-sm-7 post-listing-content'>{this.state.content}</div>
        <div className='col-sm-2 post-listing-username'>By {this.state.username}</div>
      </div>
    )
  }
});

module.exports = PostListing;
