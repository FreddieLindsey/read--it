import React from "react";

class PostTitle extends React.component {
  displayName: 'PostTitle'

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

export default PostTitle;
