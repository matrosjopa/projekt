import React from 'react'
import { NavigationBar } from '../NavigationBar'
import { Up } from '../Header';
import './Friends.css'
import { Friend } from './Friend'

import { FriendsList } from './FriendsList'



export class Friends extends React.Component {

    render() {
        return (
            <div className="Friends">
                <Up />
                <NavigationBar />
                <div className="friend">
                    <FriendsList />
                </div>
                
            </div>

        )

    };

}