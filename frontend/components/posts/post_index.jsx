import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this updates the state
    // debugger
    this.props.fetchPosts();
  }

  // renderComments(id) {
  //   this.props.comments.map(comment => {
  //     if (comment.post_id === id) {
  //       return (
  //         <span>{comment.body}</span>
  //       )
  //     }
  //   })
  // }

  render() {
    // debugger
    const posts = this.props.posts;
  
    return (
      <div className="post-container">
        {   
          posts.map((post) => {
            return <PostIndexItem 
            post={post}
            createComment={this.props.createComment} 
            deleteComment={this.props.deleteComment} 
            createLike={this.props.createLike} 
            deleteLike={this.props.deleteLike} 
            key={post.id} />
          })       
        }
      </div>
    )
  }
}

export default PostIndex;