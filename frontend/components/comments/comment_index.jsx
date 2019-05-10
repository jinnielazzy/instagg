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
    // debugger
    // const comments = this.props.comments.map(;

    const comments = this.props.comments;
    return (
      <>
        {/* <h1>{this.props.post.id}</h1> */}
        <CommentIndexItem key={this.props.post.id} comments={comments}/>
      </>
    )
  }

}

export default CommentIndex;