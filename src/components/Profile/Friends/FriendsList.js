import React from 'react'
import { NavigationBar } from '../NavigationBar'
import { Up } from '../Header';
import './Friends.css'
import { Friend } from './Friend'

import AllUsersList from '../AllUsers'

export class FriendsList extends React.Component {
    render() {
        return (
            <div>
                <AllUsersList />
            </div>
        )
    };
}