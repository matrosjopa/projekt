import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './index.css'
import { LoginBox } from './components/LoginBox'
import { RegisterBox } from './components/RegisterBox'
import { Profile } from './components/Profile'
import { Gallery } from './components/Profile/Gallery'
import { Friends } from './components/Profile/Friends'
import { Chat } from './components/Profile/Chat'
import ApolloClient from "apollo-boost";
import { ApolloProvider, ApolloHooksProvider } from "@apollo/react-hooks";

export const client = new ApolloClient({
  uri: `https://api.graph.cool/simple/v1/ciyz901en4j590185wkmexyex`
});




class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    };
  }

  render() {
    return (

      <div>
          <div>
            <Switch>
              <Route exact path="/signin" component={LoginBox} />
              <Route path="/signup" component={RegisterBox} />
              <Route path="/profile" component={Profile} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/friends" component={Friends} />
              <Route path="/chat" component={Chat} />
            </Switch>
          </div>
        </div>

    );
  }
}



ReactDOM.render((
  <ApolloProvider client={ client } >
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ApolloProvider>
  )
  
  , document.getElementById("root"));