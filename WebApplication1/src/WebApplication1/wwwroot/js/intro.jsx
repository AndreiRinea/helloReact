var Comment = React.createClass({
    render: function () {
        return (
          <div className="comment">
            <h4 className="commentAuthor">{this.props.author}
            </h4>{this.props.children}
          </div>
      );
    }
});

var CommentList = React.createClass({
    render: function () {
        var commentNodes = this.props.data.map(function(comment) {
            return (
                <Comment author={comment.author} key={comment.id}>{comment.text}</Comment>
            );
        });
        return (
            <div className="commentList">{commentNodes}</div>
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
                <br />
                <h3>Comments</h3>
              <br />
              <br />
                <CommentList data={this.props.data} />
                <hr />
                <CommentForm />
          </div>
      );
    }
});

//////////////////////==================

var data = [
    { id: 1, author: "Jim Beam", text: "Have fun!" },
    { id: 2, author: "Jonnie Walker", text: "Keep going :)" },
    { id: 3, author: "Jack Daniels", text: "Just like in Tennessee.." }
];

ReactDOM.render(
  <CommentBox data={data} />,
  document.getElementById('content')
);