import React, { Component } from 'react';
import './App.css';
import ThankYou from './Scenes/ThankYou/ThankYou';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">MadProps</h1>
        </header>
        <p className="App-intro">
          Got writer's block when it comes to thank you notes? MadProps is here to help.
        </p>
        <ThankYou />
      </div>
    );
  }
}

export default App;
