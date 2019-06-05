import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
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
  }  

  render() {
    // const currentUser = this.props.user

    if (!this.props.user) return null;
    
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
                <Link to="/upload"><span className="fas fa-cloud-upload-alt"></span></Link>
              </div>
              <div className="profile">
                <Link to="/profile"><span className="far fa-user"></span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar;