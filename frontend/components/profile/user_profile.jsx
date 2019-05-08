import React from 'react';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    // debugger
  }

  componentDidMount() {
    // debugger
    this.props.fetchUser(this.props.match.params.id)
  }

  render() {
    // debugger
    if (Object.values(this.props.user).length === 0) {
      // debugger
      return <h1>hi</h1>;
    }

    debugger
    const user = this.props.user;
    const posts = Object.values(user.posts);
    return (
      <div className="user-profile-container">
        <div>
          <h1>{user.username}</h1>
          <h1>{user.bio}</h1>
          <img src={user.profile} />
          {
            posts.map((post) => {
              return (
                <img src={post.img_url} alt=""/>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default UserProfile;