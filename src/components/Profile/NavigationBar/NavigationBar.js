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
          <Link to="/profile"
            type="button"
            className="profile-btn">
            Home
            </Link>
          <Link to="/gallery"
            type="button"
            className="profile-btn">
              Gallery
            </Link>
          <Link
            to="/friends"
            type="button"
            className="profile-btn">
            Friends
            </Link>
          <Link
            to="/chat"
            type="button"
            className="profile-btn">
            Chat
            </Link>
        </ul>
      </div>
    );
  };

}
