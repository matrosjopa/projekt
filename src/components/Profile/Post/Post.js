import React from 'react';
import './Post.css'




export class Post extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    title: "",
    text: "",
    user: ""
  };
}

  render() {
    return (
      <div className="Post">
        <div className="Avatar_post" alt="Avatar_post">
          <img src="https://vistapointe.net/images/nibbler-wallpaper-12.jpg" />
        </div>
        <div
        className="post_text">
        <h2>Autor: {this.props.user}</h2>
        <h2> {this.props.title}</h2>
        <div> {this.props.text}</div>
        </div>
      </div>
    );
  };

}


