import React from 'react';
import './About.css'
import './Avatar.css'

export default class Avatar extends React.Component {
    constructor(props) {
    super(props);
    this.state= {  };
  }
  
  
  render() {
      return (
        <div className="Avatar">
        <h1>Nibbler</h1>
        <div className="Avatar" alt="Avatar">
            <img src="https://vistapointe.net/images/nibbler-wallpaper-12.jpg" />
        </div>
        </div>
      );
    };
    
  }

    
