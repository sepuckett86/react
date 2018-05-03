import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">routertest</h1>
        </header>
        <p className="App-intro">
          This app will display a different content depending on url, using{'\u00A0'}
          <a href="https://reacttraining.com/react-router/"
          target="_blank" rel="noopener noreferrer">React Router</a>
        </p>
        <br />
        <Navbar />
      </div>
    );
  }
}

export default App;
