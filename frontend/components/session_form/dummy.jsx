import React from 'react';
import LoginFormContainer from './login_form_container';
import { Link } from 'react-router-dom';

class Dummy extends React.Component {
  render() {
    // debugger
    return (
      <div>
        <h1>Why am i here?</h1>
        {/* <LoginFormContainer/>
        <Link to="/signup">sign up if no account</Link> */}
      </div>
    )
  }
}

export default Dummy;