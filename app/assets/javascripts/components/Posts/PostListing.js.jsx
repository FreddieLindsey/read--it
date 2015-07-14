var PostListing = React.createClass({
  displayName: 'PostListing',

  getInitialState: function () {
    return {
      id: this.props.id,
      title: this.props.title,
      content: this.props.content,
      username: this.props.username
    }
  },

  render: function () {
    return (
      <div>
        <div className='col-sm-1'>{this.state.id}</div>
        <div className='col-sm-2'>{this.state.title}</div>
        <div className='col-sm-7'>{this.state.content}</div>
        <div className='col-sm-2'>By {this.state.username}</div>
      </div>
    )
  }
});
