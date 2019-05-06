import React from 'react';
import PostContainer from './posts/post_container';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './session_form/splash';
import NavBarContainer from './nav_bar/navbar_container';

const App = () => {
  return (
    <div className="app-container">
      {/* Modal */}
      <ProtectedRoute path="/posts" component={NavBarContainer}/>
      <div className="app-div">
        <Switch>
          <AuthRoute exact path="/" component={Splash} />
          <AuthRoute exact path="/login" component={LoginFormContainer} />
          <AuthRoute exact path="/signup" component={SignupFormContainer} />
          <ProtectedRoute path="/posts" component={PostContainer}/>
          {/* EditPostContainer */}
          {/* UploadContainer */}
          {/* UserProfileContainer */}
          {/* EditUserProfileContainer */}
          <Redirect to='/'/>
        </Switch>
      </div>
    </div>
  )
}

export default App;