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
    // dispatch fetchQuery here, prevProps.searchedUsers array
    // this.props.fetchSearchUsers(this.state.query);
    // debugger
  }  

  render() {
    // const currentUser = this.props.user
    // debugger
    return (
      <div className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <Link to="/posts">Insta-gg</Link>
          </div>
          <div className="search">
            <input type="search" placeholder="Search" onChange={this.handleSearch}/>
            {/* render this.props.searchedUsers */}
          </div>
          <div className="function-container">
            <div className="function">
              <div className="upload">
                <Link to="/upload"><img src='upload.png' /></Link>
              </div>
              <div className="profile">
                <Link to="/profile"><img src='user.png' /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar;