import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './index.css'
import { LoginBox } from './components/LoginBox'
import { RegisterBox } from './components/RegisterBox'
import { Profile } from './components/Profile'
import { Gallery } from './components/Profile/Gallery'
import { Friends } from './components/Profile/Friends'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
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
            </Switch>
          </div>
        </div>
      
    );
  }
}

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>), document.getElementById("root"));