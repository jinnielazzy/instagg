import React from 'react';
import PostContainer from './posts/post_container';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './session_form/splash';

const App = () => {
  return (
    <div className="app-div">
      <Switch>
        <AuthRoute exact path="/" component={Splash} />
        {/* <AuthRoute exact path="/" component={SignupFormContainer} /> */}
        <AuthRoute path="/login" component={LoginFormContainer} />
        {/* maybe take out signup */}
        <AuthRoute path="/signup" component={SignupFormContainer} />
        {/* this might be the post url, post component you are rendering */}
        <ProtectedRoute path="/posts" component={PostContainer}/>
        {/* this is for random routes, redirect to root*/}
        <Redirect to='/'/>
      </Switch>
    </div>
  )
}

export default App;