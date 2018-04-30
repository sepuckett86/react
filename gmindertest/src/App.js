import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Gminder from './util/Gminder';
import Results from './components/Results';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gminders: [],
      results: false
    }

    this.setGminders = this.setGminders.bind(this);
    this.showResults = this.showResults.bind(this);
  }

  componentWillMount(){
    this.setGminders();
  }

  setGminders() {
    // .then is critical to wait first for promise resolve before setting state
    Gminder.getGminders().then(gminders => {
      this.setState({
        gminders: gminders
      })
    })
  }

  showResults() {
    this.setState({
      results: true
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">gmindertest</h1>
        </header>
        <p className="App-intro">
          The purpose of this app is to test hook up with backend API.
        </p>
        <button onClick={this.showResults}>Load Results</button>
        {this.state.results ? <Results
          gminders={this.state.gminders}
          /> : null}
        </div>
    );
  }
}

export default App;
