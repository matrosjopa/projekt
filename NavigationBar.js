import React from 'react';
import './NavigationBar.css'

export default class NavigationBar extends React.Component {
    render() {
      return (
        <div className="NavigationBar">          
          <ul>
            <li><a class="active" href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>
      );
    };
    
  }
