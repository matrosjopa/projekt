import React from 'react';
import './index.css'
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { NavigationBar }  from './NavigationBar';
import { Gallery_profile } from './Gallery_profile/Gallery_profile';
import { Avatar } from './Avatar'
import { Wall } from './Wall';
import { Up } from './Header';
import { About } from './About'



export class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <div className="Profile" >
            <About />
            <NavigationBar />
            <Avatar />
            <Gallery_profile />
            <Up />
            <Wall />
            </div>
        );
    };

}

ReactDOM.render((
    <BrowserRouter>
        <Profile />
    </BrowserRouter>), document.getElementById("root"));


