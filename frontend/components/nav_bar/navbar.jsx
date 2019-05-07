import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    // debugger
    this.state = {
      query: ""
    }

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    e.preventDefault();
    this.setState({
      query: e.target.value
    })
  }

  componentDidUpdate(prevProps, prevState) {
    // debugger
    // dispatch fetchQuery here, prevProps.searchedUsers array
  }  

  render() {
    // const currentUser = this.props.user
    return (
      <div className="navbar">
        <div className="logo">
          <Link to="/posts">Insta-gg</Link>
        </div>
        <div className="search">
          <input type="search" placeholder="Search" onChange={this.handleSearch}/>
          {/* render this.props.searchedUsers */}
        </div>
        <div className="upload">
          <Link to="/upload">Upload</Link>
        </div>
        <div className="profile">
          <Link to="/profile">Profile</Link>
        </div>
      </div>
    )
  }
}

export default NavBar;