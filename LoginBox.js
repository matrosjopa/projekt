import React from 'react'




 export class LoginBox extends React.Component {
    constructor(props) {
      super(props);
      this.state= {};
    }

    submitLogin(e) { }

    render () {
        return (
          <div className="box-container">
            <div className="inner-container">
    <div className="header">Login</div>
      <div className="box">
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input 
            type="text"
            name="username"
            className="login-input"
            placeholder="Username">
          </input>
        </div>
            <div className="input-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password"
            name="Password"
            className="login-input"
            placeholder="Password">
          </input>
            </div>
            <button
            type="button"
            className="login-btn"
            onClick={this.submitLogin.bind(this)}>
            Sign In
            </button>
      </div>
    </div>
    </div>
    );
  }
}
