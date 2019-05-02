import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Dummy from './session_form/dummy';

const App = () => {
  // store is undefined here
  // debugger
  return (
    <div>
      <Switch>
        {/* <ProtectedRoute path="/home" component={Dummy}/> */}
        <AuthRoute exact path="/" component={SignupFormContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <ProtectedRoute path="/greeting" component={GreetingContainer}/>
      </Switch>
    </div>
  )
}

export default App;