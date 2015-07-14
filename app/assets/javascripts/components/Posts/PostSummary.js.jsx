var PostSummary = React.createClass({
  displayName: 'PostSummary',

  getInitialState: function () {
    return {
      id: this.props.id,
      title: this.props.title,
      content: this.props.content,
      username: this.props.username
    }
  },

  render: function () {
    var style_id_title = {
      fontSize: '2em'
    };

    var style_content = {
      fontSize: '1em'
    };

    return (
      <div>
        <div className="col-sm-2" style={style_id_title}>{this.state.id}</div>
        <div className="col-sm-10">
          <div className="col-sm-10" style={style_id_title}>
            {this.state.title}
          </div>
          <div className="col-sm-10" style={style_content}>
            {this.state.content}
          </div>
        </div>
      </div>
    );
  }
});
