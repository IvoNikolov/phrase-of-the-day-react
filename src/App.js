import React, { Component } from 'react';
import './App.css';
import Phrase from './Phrase/Phrase'


class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Phrase of the day</h1>
        </header>
        <Phrase></Phrase>
      </div>
    );
  }
  }
 

export default App;
