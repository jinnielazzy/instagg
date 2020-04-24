import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePost from '../posts/post';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // following user profile
    if (this.props.match.params.id !== undefined) {
      this.props.fetchUser(this.props.match.params.id);
    } else {
      // current user profile
      this.props.fetchUser(this.props.currentUser.id);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.fetchUser(this.props.match.params.id)
    }
  }
  
  renderBtns() {
    if (this.props.user.id === this.props.currentUser.id) {
      return (
        <Link to="/profile/edit">Edit Profile</Link>
      )
    } else {
      const followers = this.props.follows.map(follower => follower.follower_id);
      if (followers.includes(this.props.currentUser.id)) {
        return (
          <button className="following" onClick={() => this.props.deleteFollow(this.props.user.id)}>Following</button>
        )
      } else {
        return (
          <button className="unfollow" onClick={() => this.props.createFollow({ user_id: this.props.user.id})}>Follow</button>
        )
      }
    }
  }

  render() {
    const { posts, logout } = this.props;
    let user;
    if (this.props.match.params.id !== undefined) {
      user = this.props.user;
    } else {
      user = this.props.currentUser;
    }

    if (user === undefined) return null;
    const numFollowers = user.numFollowers ? user.numFollowers : 0;
    const numFollowings = user.numFollowings ? user.numFollowings : 0;
    
    return (
      <div className="profile-container">
        <div className="header">
          <div className="header-container">
            <div className="profile-img">
              <img src={user.profile}/>
            </div>
            <div className="profile-info">
              <div className="profile-edit">
                <h1>{user.username}</h1>
                {this.renderBtns()}
              </div>
              <div className="profile-follows">
                <span>{posts.length} posts</span>
                <span>{numFollowers} followers</span>
                <span>{numFollowings} followings</span>
              </div>
              <div className="bio">{user.bio}</div>
            </div>
            <div className="logout-btn">
              <i onClick={logout} className="fas fa-sign-out-alt"></i>
            </div>
          </div>
        </div>
        <div className="user-posts-container">
          <div className="user-posts">
            {
              posts.map((post) => 
                <ProfilePost post={post} key={post.id}/>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;