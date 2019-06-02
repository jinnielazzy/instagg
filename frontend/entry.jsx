import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/session_api_util';
import * as POSTAPIUtil from './util/post_api_util';
import { login, logout, signup } from './actions/session_actions';
import { fetchPosts, fetchPost } from './actions/post_actions';
import configureStore from './store/store';
import Root from './components/Root';
import { fetchSearchUsers } from './actions/user_action';
import { createFollow, deleteFollow } from './actions/follow_action';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;

  // keep track of if loggedin?
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.user.id]: window.currentUser.user }
      },
      session: { id: window.currentUser.user.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  
  // testing purpose
  // window.login = APIUtil.login;
  // window.signup = APIUtil.signup;
  // window.logout = APIUtil.logout;
  // window.login = login;
  // window.logout = logout;
  // window.signup = signup;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchAllPosts = POSTAPIUtil.fetchAllPosts;
  // window.fetchPost = POSTAPIUtil.fetchPost;
  // window.updatePost = POSTAPIUtil.updatePost;
  // window.deletePost = POSTAPIUtil.deletePost;
  // window.fetchPosts = fetchPosts;
  // window.fetchPost = fetchPost;
  // window.fetchSearchUsers = fetchSearchUsers;
  window.createFollow = createFollow;
  window.deleteFollow = deleteFollow;
  // tesing purpose
  
  ReactDOM.render(<Root store={store}/>, root)
})