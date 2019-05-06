import React from 'react';

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="logo">
          LOGO
        </div>
        <div className="search">
          <input type="text"/>
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