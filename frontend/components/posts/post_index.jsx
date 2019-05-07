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
    const { currentUser, logout } = this.props;
    // debugger
    return (
      <div className="post-container">
        { 
          this.props.posts.map((post) => {
            // could pass in the comment here
            return <PostIndexItem key={post.id} post={post}/>
          }) 
        }
      </div>
    )
  }
}

export default PostIndex;