import React from 'react';
import SignUpFormContainer from './signup_form_container';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  render() {
    return (
      // <div className="splash">
      <>
        <div className="splash">
          <img src="image.png" className="splash-image"/>
        </div>
        <SignUpFormContainer className="splash-signup"/>
      </>
    )
  }
}

export default Splash;