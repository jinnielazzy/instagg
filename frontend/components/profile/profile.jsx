import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // debugger
  }

  render() {
    const { currentUser, posts, logout } = this.props;
    // debugger
    return (
      <div className="profile-container">
        <div className="header">
          <div className="header-container">
            <div className="profile-img">
              <img src={currentUser.profile}/>
            </div>
            <div className="profile-info">
              <div className="profile-edit">
                <h1>{currentUser.username}</h1>
                <Link to="/profile/edit">Edit Profile</Link>
              </div>
              <div className="profile-follows">
                <span>12 posts</span>
                <span>{currentUser.followers.length} followers</span>
                <span>{currentUser.followings.length} followings</span>
              </div>
              <div className="bio">{currentUser.bio}</div>
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