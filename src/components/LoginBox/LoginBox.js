import React from 'react'
import { Link } from 'react-router-dom'




export class LoginBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {

    console.log('The form was submitted with the following data:');
    console.log(this.state);
    e.preventDefault();
  }

  render() {
    return (

      <div className="root-container">
        <div className="box-container">
        <div className="box-controller">
          <div className="controller ">Login</div>
          <div className="controller ">
            <Link to="/signup">
              Register
              </Link>
          </div>
          </div>
          <form
            onSubmit={this.handleSubmit}
            className="inner-container">
            <div className="header">Login</div>
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
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  className="login-input"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange} />
              </div>
              <button
                type="button"
                className="login-btn">
                <Link to="/profile">
                Sign In
                </Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
