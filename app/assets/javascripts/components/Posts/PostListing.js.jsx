import React from "react";
require("../../../stylesheets/Posts/posts.scss");

const displayName = "PostListing";
const propTypes = {};

export default class PostListing extends React.Component {
  render() {
    return (
      <div className="row post-summary">
        <div className="col-xs-1 col-sm-2">{this.props.id}</div>
        <div className="col-xs-11 col-sm-10 post-summary-information">
          <div><a href={this.props.url}>{this.props.title}</a></div>
          <div>{this.props.content}</div>
          <div className="post-summary-by"><p>Posted By</p>{this.props.username}</div>
        </div>
      </div>
    );
  }
}

PostListing.displayName = displayName;
PostListing.propTypes = propTypes;
