import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { RandomQuote } from './components/RandomQuote/RandomQuote';

const quotes = [
  'When in doubt, breathe and light a candle. Unless you are at a gas station. ',
  'You cannot possibly take on the whole world. Good thing you never have to. ',
  'It seems we are sometimes too quick to judge an entire person based on one statement.',
  'The trick is to learn to dip your toe in the water without falling into the pool.',
  'I take great solace in that most people do not care about what I do with my life.',
  'Do not underestimate the soothing power of a warm bath. '];

class App extends Component {
  constructor(props) {
     super(props);
     this.state = { quoteArray: quotes };
   }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Guru</h1>
        </header>
        <p className="App-intro">
          In need of a guru? Look no further. Susan guru here.
        </p>
        <RandomQuote quoteArray={this.state.quoteArray}/>

      </div>
    );
  }
}

export default App;
