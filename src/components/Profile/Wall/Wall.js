import React from 'react';
import './Wall.css'
import { Post } from './Post'

export class Wall extends React.Component {
    render() {
      return (
        <div className="Wall">
          <Post />
          <Post />
        </div>
      );
    };
    
  }

    
