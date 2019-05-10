import React from 'react';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const comment = this.props.comment;
    return (
      <div className="comment-body-container">
        <div className="comment-username">
          {comment.username}
        </div>
        <div className="comment-body">
          {comment.body}
        </div>
      </div>
    )
  }
}

export default CommentIndexItem;