import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CommentList from './components/CommentList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Enzyme Test</h1>
        </header>
        <p className="App-intro">
          'npm test' is enabled
        </p>
        <CommentList />
      </div>
    );
  }
}

export default App;
