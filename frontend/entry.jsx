import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/session_api_util';
import { login, logout, signup } from './actions/session_actions';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  // testing purpose
  // window.login = APIUtil.login;
  // window.signup = APIUtil.signup;
  // window.logout = APIUtil.logout;
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  // tesing purpose

  ReactDOM.render(<h1>Instagg Entry</h1>, root)
})