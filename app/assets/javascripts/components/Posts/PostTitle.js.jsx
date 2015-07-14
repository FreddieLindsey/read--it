var PostTitle = React.createClass({
  displayName: 'PostTitle',

  render: function () {
    return (
      <div>
        <h4 className='col-sm-1'>Post ID</h4>
        <h4 className='col-sm-2'>Post Title</h4>
        <h4 className='col-sm-7'>Post Content</h4>
        <h4 className='col-sm-2'>Post By</h4>
      </div>
    );
  }
});
