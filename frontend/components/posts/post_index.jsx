import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUserPosts(this.props.currentUser.id);
  }

  render() {
    const posts = this.props.posts.reverse();
    const likes = this.props.likes;
    const currentUser = this.props.currentUser;

    const map = {};
    for (let i = 0; i < likes.length; i++) {
      if (!map[likes[i].post_id]) map[likes[i].post_id] = [];
      map[likes[i].post_id].push(likes[i]);
    }

    return (
      <div className="post-container">
        {   
          posts.map((post) => {
            return <PostIndexItem 
            currentUser={currentUser}
            post={post}
            likes={map[post.id]}
            createComment={this.props.createComment} 
            deleteComment={this.props.deleteComment} 
            createLike={this.props.createLike} 
            deleteLike={this.props.deleteLike} 
            fetchLikes={this.props.fetchLikes}
            deletePost={this.props.deletePost}
            key={post.id} />
          })       
        }
      </div>
    )
  }
}

export default PostIndex;