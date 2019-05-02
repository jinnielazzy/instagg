import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
  // store is undefined here
  // debugger
  return (
    <div>
      <ProtectedRoute compoent={GreetingContainer}/>
      <Switch>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
      </Switch>
    </div>
  )
}

export default App;