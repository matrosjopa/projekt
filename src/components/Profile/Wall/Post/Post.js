import React from 'react';
import './Post.css'

export class Post extends React.Component {
  render() {
    return (
      <div className="Post">
        <div className="Avatar_post" alt="Avatar_post">
          <img src="https://vistapointe.net/images/nibbler-wallpaper-12.jpg" />
        </div>
        <div
        className="post_text">
        <h2>Autor:</h2>
        <input
          name="post"
          className="post_area"
          type="text"
          placeholder="Your message"
        >
        </input>
        <button>Add</button>
        </div>
      </div>
    );
  };

}


