import React from 'react';
import CommentContainer from '../comments/comment_container';
import { Link } from 'react-router-dom';
import Textarea from 'react-textarea-autosize';
import Likes from './likes';

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

  renderDeletePost() {
    if (this.props.post.user_id === this.props.currentUser.id) {
      return (
        <i className="far fa-trash-alt" onClick={() => this.props.deletePost(this.props.post.id)}></i>
      )
    }
  }

  render() {
    const post = this.props.post;
    const likes = this.props.likes || [];
    const postId = this.props.post.id;
    const currentUser = this.props.currentUser;
    const createLike = this.props.createLike;
    const deleteLike = this.props.deleteLike;

    return (
      <div className="post-item-container">
        <header className="post-header">
            <div className="post-author-profile">
              <Link to={`/users/${post.user_id}`}><img src={post.author.profile} /></Link>
            </div>
            <div className="post-author-name">
              <Link to={`/users/${post.user_id}`}>{post.author.username}</Link>
            </div>
            <div className="post-delete">
              {this.renderDeletePost()}
            </div>
        </header>
        <div className="post-main">
          <img src={post.img_url} />
        </div>
        <div className="post-comment-container">
          <Likes likes={likes} postId={postId} currentUser={currentUser} createLike={createLike} deleteLike={deleteLike} />
          <div className="post-comment">
            <div className="post-caption">
              <Link to={`/users/${post.user_id}`}><span className="username">{post.author.username}</span></Link>              
              <span className="caption">{post.caption}</span>
            </div>
            <CommentContainer post={post}/>
          </div>
          <div className="post-date">
            <span>{new Date(post.created).toDateString()}</span>
          </div>
          <div className="comment-form-container">
            <div className="comment-form">
              <form>
                <Textarea placeholder="Add a Comment" value={this.state.body} onChange={this.updateComment}></Textarea>
              </form>
              <button onClick={this.handleSubmit}>Post</button>
            </div>
          </div>         
        </div>
      </div>
    )
  }
}


export default PostIndexItem;