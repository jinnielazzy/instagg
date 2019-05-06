import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this updates the state
    return this.props.fetchPosts();
  }

  render() {
    // debugger
    const { currentUser, logout } = this.props;
    // debugger
    return (
      <div className="post-container">
        <h1>Hi, {currentUser.username}</h1>
        <button onClick={logout}>Log Out</button>
        <ul>
          { 
            this.props.posts.map((post) => {
              return <PostIndexItem key={post.id} post={post}/>
            }) 
          }
        </ul>
      </div>
    )
  }
}

export default PostIndex;