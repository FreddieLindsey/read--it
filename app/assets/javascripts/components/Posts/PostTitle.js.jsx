import React from "react";

const displayName = "PostTitle";
const propTypes = {};

export default class PostTitle extends React.Component {
  render() {
    return (
      <div>
        <h4 className='col-sm-1'>Post ID</h4>
        <h4 className='col-sm-2'>Post Title</h4>
        <h4 className='col-sm-7'>Post Content</h4>
        <h4 className='col-sm-2'>Post By</h4>
      </div>
    );
  }
}

PostTitle.displayName = displayName;
PostTitle.propTypes = propTypes;
