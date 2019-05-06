import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="logo">
          <Link to="/posts">Insta-gg</Link>
        </div>
        <div className="search">
          <input type="search" placeholder="Search"/>
        </div>
        <div className="upload">
          Upload
        </div>
        <div className="profile">
          Profile
        </div>
      </div>
    )
  }
}

export default NavBar;