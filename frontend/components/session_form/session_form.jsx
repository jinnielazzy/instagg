import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //   clear out the errors here
  // }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    // this route might change
    this.props.processForm(user).then(() => this.props.history.push('/greeting'));
  }

  // handleDemo(e) {
  //   e.preventDefault();
  //   // this route might change
  //   this.props.processDemo(user).then(() => this.props.history.push('/greeting'));
  // }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <>
        <div className="login-form-container">
          <h1 className='login-form-title'>Insta-gg</h1>
          <div className="instagg-intro">
            Sign up to see photos and videos from your friends.
          </div>
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <div className="login-form">
              <br />
              <label className="login-form-input-username">
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input"
                  placeholder="Username"/>
              </label>
              <br />
              <label className="login-form-input-password">
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                  placeholder="Password"
                  />
              </label>
              <br />
              <input className="session-submit" type="submit" value={this.props.formType} />
            </div>
            {/* <button onClick={this.props.handleDemo(user)} /> */}
            {this.renderErrors()}
          </form>
          <div className='form-footer-link'>
            {this.props.navLink}
          </div>
        </div>
      </>
    );
  }
}

export default SessionForm;