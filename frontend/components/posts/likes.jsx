import React from 'react';

class Likes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      class: "unliked"
    };
  }

  renderLikeBtn() {
    let liker = this.userLiked();
    if (liker) {
      return <div className="like-container" onClick={() => this.unlikePost(liker)}><label className="liked">❤</label></div>
    } else {
      return <div className="like-container" onClick={() => this.likePost()} ><label className={this.state.class}>❤</label></div>
    }
  }

  unlikePost(liker) {
    this.setState({
      class: "unliked"
    }, () => this.props.deleteLike(liker));
  }

  likePost() {
    this.setState({
      class: "liked"
    }, () => this.props.createLike({ post_id: this.props.postId }));
  }

  userLiked() {
    return this.props.likes.find(like => like.user_id === this.props.currentUser.id);
  }

  animation() {
    
  }

  render() {
    let likes = this.props.likes;

    return (
      <div className="like">
        {this.renderLikeBtn()}
        <div className="like-container"><span>{likes.length} Likes</span></div>
        <label className="test" onClick={() => this.animation()}>❤</label>
      </div>
    );
  }
}

export default Likes;