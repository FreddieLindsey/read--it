import React from "react";

const displayName = "PostSummary";
const propTypes = {};

export default class PostSummary extends React.Component {
  render() {
    return (
      <div>
        <div className="col-sm-2">{this.props.id}</div>
        <div className="col-sm-10">
          <div className="col-sm-10">{this.props.title}</div>
          <div className="col-sm-10">{this.props.content}</div>
        </div>
      </div>
    );
  }
}

PostSummary.displayName = displayName;
PostSummary.propTypes = propTypes;
