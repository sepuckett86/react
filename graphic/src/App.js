import React, { Component } from 'react';
import './App.css';

import Box from './Components/Box';
import Example from './Components/Example';
import Fade from './Components/Fade';
import GradientFade from './Components/GradientFade';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Graphics - Testing React Transition Group</h1>
        </header>
        <Box />
        <Example />
        <Fade />
        <GradientFade />
      </div>
    );
  }
}

export default App;
