import React from "react";
import PostListing from "./PostListing.js.jsx";
require("../../../stylesheets/Posts/posts.scss");

const displayName = "PostList";
const propTypes = {};

export default class PostList extends React.Component {
  render() {
    var posts = this.props.posts;
    return (
        <div className="post-list">
          {posts.map(function(post) {
            return <PostListing id={post.id} url={post.url} title={post.title} content={post.content} username={post.username} key={post.id} />;
          })}
        </div>
      );
  }
}

PostList.displayName = displayName;
PostList.propTypes = propTypes;
