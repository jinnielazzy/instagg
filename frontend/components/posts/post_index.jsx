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

  render() {
    // debugger
    return (
      <div className="post-container">
        { 
          this.props.posts.map((post) => {
            // could pass in the comment here
            return <PostIndexItem key={post.id} 
            post={post} 
            deleteComment={this.props.deleteComment}
            createComment={this.props.createComment}
            createLike={this.props.createLike}
            deleteLike={this.props.deleteLike}/>
          }) 
        }
      </div>
    )
  }
}

export default PostIndex;