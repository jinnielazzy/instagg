import React from 'react';
import PostContainer from './posts/post_container';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './session_form/splash';
import NavBarContainer from './nav_bar/navbar_container';
import UploadContainer from './posts/upload_container';
import ProfileContainer from './profile/profile_container';
import EditProfileContainer from './profile/edit_profile_container';
import UserProfileContainer from './profile/user_profile_container';

const App = () => {
  return (
    <div className="app-container">
      {/* Modal */}
      <NavBarContainer />
      <div className="app-div">
        <Switch>
          <AuthRoute exact path="/login" component={LoginFormContainer} />
          <AuthRoute exact path="/signup" component={SignupFormContainer} />
          <AuthRoute exact path="/" component={Splash} />
          <ProtectedRoute path="/posts" component={PostContainer}/>
          <ProtectedRoute path="/upload" component={UploadContainer} />
          <ProtectedRoute path="/profile/edit" component={EditProfileContainer}/>
          <ProtectedRoute path="/profile" component={ProfileContainer}/>
          <ProtectedRoute path="/users/:id" component={UserProfileContainer}/>
          <Redirect to='/'/>
        </Switch>
      </div>
    </div>
  )
}

export default App;