import React from "react";

const displayName = "PostListing";
const propTypes = {};

export default class PostListing extends React.Component {
  render() {
    return (
      <div>
        <div className='col-sm-1 post-listing-id'>{this.props.id}</div>
        <div className='col-sm-2 post-listing-title'><a href={this.props.url}>{this.props.title}</a></div>
        <div className='col-sm-7 post-listing-content'>{this.props.content}</div>
        <div className='col-sm-2 post-listing-username'>By {this.props.username}</div>
      </div>
    );
  }
}

PostListing.displayName = displayName;
PostListing.propTypes = propTypes;
