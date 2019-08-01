import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Header from './components/Header'
import NavigationBar from './components/NavigationBar'
import Wall from './components/Wall'
import About from './components/About'
import Gallery from './components/Gallery'
import Avatar from './components/Avatar'

class App extends React.Component {
  constructor(props) {
  super(props);
  this.state= {
    name:"jopa",
    family:"jopa",
  };
  }
 

    render() {
      return (
        <div className="App" >
        <Header />
        <NavigationBar />
        <Avatar />
        <About /> 
        <Gallery />      
        <Wall />
        </div>
      );
    };
    
  }

    
ReactDOM.render(
  <App/>, document.getElementById("root"));

  