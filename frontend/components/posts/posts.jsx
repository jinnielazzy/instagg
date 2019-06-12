import React from 'react';
import Post from './post';

class Posts extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const posts = this.props.posts;
    return (
      <>
        {/* {
          posts.map(post => {
            <Post post={post}/>
          })
        } */}
      </>
    )
  }
}

export default Posts;