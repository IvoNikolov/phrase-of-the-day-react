import React, { Component } from 'react';
import './App.css';
import Phrase from './Phrase/Phrase';
import Creator from './Creator/Creator'


class App extends Component {

  state = { 
    phraseNumber: 0
  }


  switchPhraseHandler = () => {
    // console.log('switch');
    let phraseNum = Math.floor(Math.random() * 3);

    while(phraseNum === this.state.phraseNumber) {
      phraseNum = Math.floor(Math.random() * 3);
    }

    this.setState({phraseNumber: phraseNum})
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Phrase of the day</h1>
        </header>
        <Phrase phraseNumber={this.state.phraseNumber}></Phrase>
        <button onClick={this.switchPhraseHandler}>I do not like this phrase, change it!</button>
        <Creator name="Ivo Nikolov" >&copy; 2020</Creator>
      </div>
    );
  }
}
 

export default App;
