import React from 'react';
import { Link } from 'react-router-dom';
import LoginFormContainer from '../session_form/login_form_container'

const Greeting = ({currentUser, logout}) => {
  // if (currentUser) {
    return (
      <div>
        <h1>Hi, {currentUser.username}</h1>
        <button onClick={logout}>Log Out</button>
      </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       {/* <LoginFormContainer/> */}
  //       <Link to="/login">Login</Link>
  //       <br/>
  //       <Link to="/signup">Sign Up</Link>
  //     </div>
    )
  // }
}

export default Greeting;