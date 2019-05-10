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
    // const comments = this.props.comments.map(;
    const comments = this.props.comments;
    return (
      <>
        {/* <CommentIndexItem key={this.props.post.id} comments={comments}/> */}
        {
          comments.map(comment => {
            return <CommentIndexItem key={comment.id} comment={comment}/>
          })
        }
      </>
    )
  }

}

export default CommentIndex;