import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentDidMount() {
    this.props.removeErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    // this route might change
    // this.props.processForm(user).then(() => this.props.history.push('/posts'));
    this.props.processForm(user);
  }

  handleDemo(e) {
    e.preventDefault();
    this.props.processDemo({username: "ohyeah", password: "password"});
  }

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
    let msg, welcome;
    if (this.props.formType === 'Log in') {
      msg = "Don't have an account?"
    } else {
      msg = "Have an account?"
      welcome = "Sign up to see photos and videos from your friends."
    }

    return (
      <div className="login-form-container">
        <div className='form-container'>
          <h1 className='login-form-title'>Insta-gg</h1>
          <div className="instagg-intro">
            {welcome}
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
          </form>
          <button className="demo-btn" onClick={this.handleDemo}>Demo Login</button>
          {this.renderErrors()}
        </div>
        <div className='form-footer-link'>
          <p>{msg} {this.props.navLink}</p>
        </div>
      </div>
    );
  }
}

export default SessionForm;