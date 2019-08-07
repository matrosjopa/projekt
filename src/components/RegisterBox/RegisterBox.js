import React from 'react'
import { Link } from 'react-router-dom'



export class RegisterBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      hasAgree: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('The form was submitted with the following data:');
    console.log(this.state);
  }

  render() {
    return (
      <div className="root-container">
        <div className="box-container">
          <div className="box-controller">
            <div className="controller ">
              <Link to="/signin">
                Login
            </Link>
            </div>

            <div className="controller ">Register</div>
          </div>
          <form onSubmit={this.handleSubmit} className="inner-container">
            <div className="header">Register</div>
            <div className="box">
              <div className="input-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  className="login-input"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.handleChange}>
                </input>
              </div>
              <div className="input-group">
                <label htmlFor="username">E-Mail</label>
                <input
                  type="email"
                  name="email"
                  className="login-input"
                  placeholder="E-Mail"
                  value={this.state.email}
                  onChange={this.handleChange}>
                </input>
              </div>
              <div className="input-group">
                <label htmlFor="username">Password</label>
                <input
                  type="password"
                  name="password"
                  className="login-input"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}>
                </input>
              </div>
              <div className="input-group">
                <label className="checkbox_label">
                  <input className="checkbox_in"
                    type="checkbox"
                    name="hasAgree"
                    value={this.state.hasAgree}
                    onChange={this.handleChange}>
                  </input>
                  I agree all
                    </label>
              </div>
              <button
                type="button"
                className="login-btn"
                onClick={this.submitLogin}>
                <Link to="/profile">
                  Sign Up
                </Link>
              </button>
            </div>
          </form>
        </div>
      </div>

    )
  }
}
