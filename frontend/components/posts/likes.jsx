import React from 'react';

class Likes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      class: "no-heart"
    };
  }

  renderLikeBtn() {
    let liker = this.userLiked();

    if (liker) {
      return <div onClick={() => this.unlikePost(liker)} className={this.state.class}>Liked</div>
    } else {
      return <div onClick={() => this.likePost()} className={this.state.class}>Like</div>
    }
  }

  unlikePost(liker) {
    this.setState({
      class: "no-heart"
    }, () => this.props.deleteLike(liker));
  }

  likePost() {
    this.setState({
      class: "heart"
    }, () => this.props.createLike({ post_id: this.props.postId }));
  }

  userLiked() {
    return this.props.likes.find(like => like.user_id === this.props.currentUser.id);
  }

  render() {
    let {postId, likes, currentUser} = this.props;

    return (
      <div className="stage">
        {this.renderLikeBtn()}
        <div>{likes.length} Likes</div>
      </div>
    );
  }
}

export default Likes;