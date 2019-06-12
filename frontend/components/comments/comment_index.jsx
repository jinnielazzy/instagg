import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchComments(this.props.post.id);
  }

  render() {
    const comments = this.props.comments;
    return (
      <div className="post-comment-text">
        {
          comments.map(comment => 
            <CommentIndexItem key={comment.id}
            comment={comment}
            currentUser={this.props.currentUser}
            deleteComment={this.props.deleteComment}
            />
          )
        }
      </div>
    )
  }

}

export default CommentIndex;