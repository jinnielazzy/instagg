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
      return (
        <div className="like-container">
          <label className="liked" onClick={() => this.unlike(liker)}>❤</label>
        </div>
      )
    } else {
      return <div className="like-container"><label className={this.state.class} onClick={() => this.animation()} onAnimationEnd={() => this.animationend()}>❤</label></div>
    }
  }

  userLiked() {
    return this.props.likes.find(like => like.user_id === this.props.currentUser.id);
  }

  unlike(liker) {
    this.setState({
      class: "unliked"
    }, () => this.props.deleteLike(liker));
  }

  animation() {
    this.setState({
      class: "heart"
    })
  }

  animationend() {
    this.props.createLike({post_id: this.props.postId});
  }

  render() {
    let likes = this.props.likes;

    return (
      <div className="like">
        {this.renderLikeBtn()}
        <div className="like-container"><span>{likes.length} Likes</span></div>
      </div>
    );
  }
}

export default Likes;