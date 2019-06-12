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
      <div className="explore-posts">
        <div className="user-posts">
          {
            posts.map(post => 
              <Post key={post.id} post={post}/>
            )
          }
        </div>
      </div>
    )
  }
}

export default Posts;