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

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  componentDidUpdate(prevProps, prevState) {
    // dispatch fetchQuery here, prevProps.searchedUsers array
    if (prevState !== this.state) {
      if (this.state.query === "") {
        this.props.clearSearchUsers();
      } else {
        this.props.fetchSearchUsers(this.state.query);
      }
    }
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
            <div className="results">
              <ul className="result-lists">
                {
                  this.props.searchUsers.map(user => {
                    return (
                      <li className="user" key={user.id}>
                        <div className="username">{user.user.username}</div>
                        {/* <div className="userimg"><img src={user.user.profile}/></div> */}
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
          <div className="function-container">
            <div className="function">
              <div className="explore">
                <Link to="/explore"><span className="far fa-compass"></span></Link>
              </div>
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