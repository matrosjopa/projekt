import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Up } from '../Header';
import { NavigationBar } from '../NavigationBar';
import './Chat.css';
import { ChatList } from './ChatList';
import { ChatMessages } from './ChatMessages';
import ApolloClient from "apollo-boost";
import { ApolloProvider, useQuery, useApolloClient } from "@apollo/react-hooks";
import AllUsersList from '../AllUsers'

export const client = new ApolloClient({
    uri: `https://api.graph.cool/simple/v1/ciyz901en4j590185wkmexyex`
  });

export class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            username: ""
        };
    }


    render() {
        return (
            <div className="Chat">
                <Up />
                <NavigationBar />
                <div className="chat_list">
                    <ChatList />
                </div>
                <div className="chat_message">
                    <ChatMessages />
                </div>
                <Switch>
                    <Route path to="/chat/1" />
                    <Route path to="/chat/2" />
                    <Route path to="/chat/3" />
                </Switch>
            </div>

        );
    }
}



ReactDOM.render((
    <ApolloProvider client={client}>
    <BrowserRouter>
        <Chat />
    </BrowserRouter>
    </ApolloProvider>), document.getElementById("root"));