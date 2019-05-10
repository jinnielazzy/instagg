import React from 'react';
import CommentContainer from '../comments/comment_container';
import { toUnicode } from 'punycode';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post_id: this.props.post.id,
      body: ""
    }

    this.updateComment = this.updateComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchLikes(this.props.post.id);
  }

  updateComment(e) {
    this.setState({
      body: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.state);
    this.setState({
      body: ""
    })
  }

  renderLikeBtn(likes, post) {
    // debugger
    const liker = likes.find(like => like.user_id === this.props.currentUser.id);
    // console.log(liker);
    if (liker) {
      return <i className="fas fa-heart" onClick={() => this.props.deleteLike(liker)}></i>
    } else {
      return <i className="far fa-heart" onClick={() => this.props.createLike({ post_id: post.id })}></i>      
    }
  }

  render() {
    const post = this.props.post;
    const likes = this.props.likes.filter(like => like.post_id === post.id)

    // console.log(post.id)
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
          {this.renderLikeBtn(likes, post)}
          <div className="post-like-count">
            {post.likes} likes
          </div>
          <div className="post-comment">
            <div className="post-caption">
              {post.caption}
            </div>
            <div className="post-comment-text">
              <CommentContainer post={post}/>
            </div>
          </div>
          <div className="comment-form-container">
            <form className="comment-form">
              <textarea placeholder="Add a Comment" onChange={this.updateComment}></textarea>
            </form>
            <button onClick={this.handleSubmit}>Post</button>
          </div>
        </div>
      </div>
    )
  }
}


export default PostIndexItem;