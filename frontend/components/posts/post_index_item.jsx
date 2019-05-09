import React from 'react';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post_id: this.props.post.id,
      body: ""
    }

    this.updateComment = this.updateComment.bind(this);
  }

  updateComment(e) {
    this.setState({
      body: e.target.value
    })
  }

  render() {
    // debugger
    const post = this.props.post;
    return (
      <div className="post-item-container">
        <header className="post-header">
          {/* this whole thing could be a link */}
        <div className="post-author-profile">
            <img src={post.author.profile}/>
          </div>
          <div className="post-author-name">
            {post.author.username}
          </div>
        </header>
        <div className="post-main">
          <img src={post.photoUrl} />
        </div>
        <div className="post-comment-container">
          <i className="fas fa-heart" onClick={() => this.props.createLike({ post_id: post.id})}></i>
          <div className="post-like-count">
            {post.likes.length} likes
          </div>
          <div className="post-comment">
            <div className="post-caption">
              {post.caption}
            </div>
            <div className="post-comment-text">
              {
                post.comments.map((comment) => {
                  return (
                    <span>{comment.body}</span>
                  )
                })
              }
            </div>
          </div>
          <div className="comment-form-container">
            <form className="comment-form">
              <textarea placeholder="Add a Comment" onChange={this.updateComment}></textarea>
            </form>
            <button onClick={() => this.props.createComment(this.state)}>Post</button>
          </div>
        </div>
      </div>
    )
  }
}


export default PostIndexItem;