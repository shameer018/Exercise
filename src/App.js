import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Stopwatch from './Stopwatch'

class App extends Component {

  render() {
    return(
      <header className="App-header">
     <div className="App"  >
      <img src={logo} className="App-logo" alt="logo" />

      <h1> Stopwatch</h1>
      <Stopwatch />
      </div>
      </header>
      
    );
  
     }
}



export default App;
