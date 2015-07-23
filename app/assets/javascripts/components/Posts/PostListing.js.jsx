import React from "react";

const displayName = "PostListing";
const propTypes = {};

export default class PostListing extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-3">{this.props.id}</div>
        <div className="col-xs-9"><a href={this.props.url}>{this.props.title}</a></div>
        <div className="col-xs-12">{this.props.content}</div>
        <div className="col-xs-12"><p>Posted By</p>{this.props.username}</div>
      </div>
    );
  }
}

PostListing.displayName = displayName;
PostListing.propTypes = propTypes;
