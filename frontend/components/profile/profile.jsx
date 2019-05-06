import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // debugger
  }

  componentDidMount() {
    // this.props.fetchUser(this.props.currentUser.id);
  }

  render() {
    const { currentUser, posts, logout } = this.props;
    // debugger
    return (
      <div className="profile-container">
        <h1>Profile pic:<img src={currentUser.profile}/></h1>
        <h1>{currentUser.username}</h1>
        <h1>{currentUser.bio}</h1>
        <h1>Followers: {currentUser.followers.length}</h1>
        <h1>Followings: {currentUser.followings.length}</h1>
        <Link to="/profile/edit">Edit Profile</Link>
        <ul>
        {
          posts.map((post) => (
            <li>
              <img src={post.img_url} />
            </li>
          ))
        }
        </ul>
        <button onClick={logout}>Log Out</button>
      </div>
    )
  }
}

export default Profile;