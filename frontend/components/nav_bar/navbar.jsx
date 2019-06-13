import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      display: false
    }

    this.handleSearch = this.handleSearch.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleSearch(e) {
    e.preventDefault();
    this.setState({
      query: e.target.value
    })
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick);
  }

  handleClick(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({
        query: "",
        display: false
      })
    }
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  componentDidUpdate(prevProps, prevState) {
    // dispatch fetchQuery here, prevProps.searchedUsers array
    if (prevState.query !== this.state.query) {
      if (this.state.query === "") {
        this.props.clearSearchUsers();
      } else {
        this.props.fetchSearchUsers(this.state.query);
        this.setState({
          display: true
        })
      }
    }
  }  
  
  reset() {
    this.setState({
      query: "",
      display: false
    })
  }

  render() {
    // const currentUser = this.props.user
    if (!this.props.user) return null;

    return (
      <div className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <Link to="/posts"> 
              <div className="icon">
                <i className="fab fa-instagram"></i>
              </div>
              <div className="logo-text">
                <span>Insta-gg</span>
              </div>
            </Link>
          </div>
          <div className="search" ref={this.setWrapperRef}>
            <input type="search" placeholder="Search" onChange={this.handleSearch}/>
            {
              this.state.display ? (
                  <ul className="result-lists">
                    {
                      this.props.searchUsers.map(user => {
                        return (
                          <li className="user" key={user.user.id} onClick={this.reset}>
                            <Link to={`/users/${user.user.id}`}>
                              <img className="userimg" src={user.user.profile}/>
                              <span className="username">{user.user.username}</span>
                            </Link>
                          </li>
                        )
                      })
                    }
                  </ul>
              ) : null
            }
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