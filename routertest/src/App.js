import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {

  render() {
    const Home = () => (
      <div>
        <h2>Home</h2>
        <p>This is my home now</p>
      </div>
    );

    const About = () => (
      <div>
        <h2>About</h2>
        <p>And this is about</p>
      </div>
    );
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to routertest</h1>
        </header>
        <p className="App-intro">
          This app will display a different content depending on url, using{'\u00A0'}
          <a href="https://reacttraining.com/react-router/"
          target="_blank" rel="noopener noreferrer">React Router</a>
        </p>
        <br />
        <Router>
          <div>
            <Link to="/">Home</Link>
              {'\u00A0'}
            <Link to="/about">About</Link>
            <hr />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
