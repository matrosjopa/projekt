import React from 'react';
import { Link } from 'react-router-dom'


export class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="NavigationBar">
        <ul>
          <button
            type="button"
            className="profile-btn">
            <Link to="/profile">
              Home
            </Link>
          </button>
          <button
            type="button"
            className="profile-btn">
            <Link to="/gallery">
              Gallery
            </Link>
          </button>
          <button
            type="button"
            className="profile-btn">
            <Link to="/friends">
              Friends
            </Link>
          </button>
          <button
            type="button"
            className="profile-btn">
            <Link to="/signin">
              Home
            </Link>
          </button>
        </ul>
      </div>
    );
  };

}
