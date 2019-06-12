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
    const currentUser = this.props.currentUser;
    return (
      <>
        {
          comments.map(comment => 
            <CommentIndexItem key={comment.id} 
            comment={comment} 
            currentUser={currentUser}
            deleteComment={this.props.deleteComment}
            />
          )
        }
      </>
    )
  }

}

export default CommentIndex;