var Comment = React.createClass({
    render: function () {
        return (
          <div className="comment">
            <h4 className="commentAuthor">
                {this.props.author}
            </h4>
              {this.props.children}
          </div>
      );
    }
});

var CommentList = React.createClass({
    render: function () {
        return (
          <div className="commentList">
              <Comment author="Jim">Nice.</Comment>
              <Comment author="Joe">Interesting...</Comment>
              <Comment author="Jack">Hm.</Comment>
          </div>
      );
    }
});

var CommentForm = React.createClass({
    render: function () {
        return (
          <div className="commentForm">
              Hello, world! I am a CommentForm.
          </div>
      );
    }
});

var CommentBox = React.createClass({
    render: function () {
        return (
          <div className="commentBox">
                <h3>Comments</h3>
                <CommentList />
                <hr />
                <CommentForm />
          </div>
      );
    }
});

//////////////////////////////////////////////////////

ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);