import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // debugger
  }

  componentDidMount() {
    debugger
    if (this.props.match.params.id !== undefined) {
      this.props.fetchUser(this.props.match.params.id)
    }
  }

  render() {
    // debugger
    const { posts, logout } = this.props;
    let user;
    if (this.props.match.params.id !== undefined) {
      user = this.props.user;
    } else {
      user = this.props.currentUser;
    }

    // debugger
    
    if (user === undefined) return null;
    
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
                <Link to="/profile/edit">Edit Profile</Link>
              </div>
              <div className="profile-follows">
                <span>{posts.length} posts</span>
                <span>{user.followers.length} followers</span>
                <span>{user.followings.length} followings</span>
              </div>
              <div className="bio">{user.bio}</div>
            </div>
            <div className="logout-btn">
              <button onClick={logout}>Log Out</button>
            </div>
          </div>
        </div>
        <div className="user-posts-container">
          <div className="user-posts">
            {
              posts.map((post) => (
                <div className="post-img">
                  <img src={post.img_url} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;