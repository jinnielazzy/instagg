import React from 'react';
import { Link } from 'react-router-dom';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const comment = this.props.comment;
    return (
      <div className="comment-body-container">
        <div className="comment-username">
          <Link to={`/users/${comment.user_id}`}>{comment.username}</Link>
        </div>
        <div className="comment-body">
          {comment.body}
        </div>
      </div>
    )
  }
}

export default CommentIndexItem;