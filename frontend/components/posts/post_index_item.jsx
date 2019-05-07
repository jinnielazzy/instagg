import React from 'react';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // debugger
    const post = this.props.post;
    return (
      <div className="post-item-container">
        <header className="post-header">
          {/* this whole thing could be a link */}
          <div className="post-author-profile">
            <img src='user.png'/>
          </div>
          <div className="post-author-name">
            post author
          </div>
        </header>
        <div className="post-main">
          <img src={post.photoUrl} />
        </div>
        <div className="post-comment-container">
          <i className="fas fa-heart"></i>
          <div className="post-like-count">
            0 likes
          </div>
          <div className="post-comment">
            <div className="post-caption">
              caption here
            </div>
            <div className="post-comment-text">
              comments here
            </div>
          </div>
          <div className="comment-form-container">
            <form className="comment-form">
              <textarea placeholder="Add a Comment"></textarea>
            </form>
            <button>Post</button>
          </div>
        </div>
      </div>
    )
  }
}


export default PostIndexItem;