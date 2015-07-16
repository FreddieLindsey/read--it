var React = require('react');

var Comment = React.createClass({
  displayName: 'Comment',

  getInitialState: function () {
    return {
      content: this.props.content,
      username: this.props.username,
      created: this.props.created
    }
  },

  render: function () {
    var style_date_user = {
      fontSize: '1.2em'
    };

    var style_content = {
      fontSize: '0.9em'
    };

    return (
      <div>
        <div className="col-sm-2" style={style_date_user}>{this.state.created}</div>
        <div className="col-sm-10">
          <div className="col-sm-10" style={style_date_user}>
            {this.state.username}
          </div>
          <div className="col-sm-10" style={style_content}>
            {this.state.content}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Comment;
