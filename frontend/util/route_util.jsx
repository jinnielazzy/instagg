import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => {
    // debugger
    return !loggedIn ? (
      <Component {...props} />
    ) : (
        <Redirect to="/posts" />
      )
  }} />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => {
    // debugger
    return loggedIn ? (
      <Component {...props} />
    ) : (
        <Redirect to="/" />
      ) 
  }} />
);

const mapStateToProps = state => {
  // debugger
  return { loggedIn: Boolean(state.session.id) }
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
