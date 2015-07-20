import React from "react";

const displayName = "Comment";
const propTypes = {};

export default class Comment extends React.Component {
  render() {
    return (
      <div>
        <div className="col-sm-2">{this.state.created}</div>
        <div className="col-sm-10">
          <div className="col-sm-10">{this.state.username}</div>
          <div className="col-sm-10">{this.state.content}</div>
        </div>
      </div>
    );
  }
}

Comment.displayName = displayName;
Comment.propTypes = propTypes;
