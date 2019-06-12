import React from 'react';
import { Link } from 'react-router-dom';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  renderBtn() {
    if (this.props.currentUser.id === this.props.comment.user_id) {
      return <button onClick={() => this.props.deleteComment(this.props.comment.id)} className="delete-comment">delete</button>
    }
  }

  render() {
    const comment = this.props.comment;
    return (
      <div className="comment-body-container">
        <div className="comment-username">
          <Link to={`/users/${comment.user_id}`}>{comment.username}</Link>
        </div>
        <div className="comment-body">
          <span>{comment.body}</span> 
          {this.renderBtn()} 
        </div>
      </div>
    )
  }
}

export default CommentIndexItem;