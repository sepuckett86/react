import React, { Component } from 'react';
import './App.css';
import ExpressTest from './utils/ExpressTest';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      database: 'no data',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  handleChange(event) {
    if(event.target.id === 'putInput') {
      this.setState({
        input: event.target.value
      })

    }
  }

  handleClick(event) {
    if(event.target.id === 'get') {
      ExpressTest.getDatabase().then(database => {
        const newData = JSON.stringify(database);
        this.setState({
          database: newData
        })
      })
    }
    if(event.target.id === 'put') {
      ExpressTest.putDatabase(this.state.input).then(database => {
        this.setState({
          database: database
        })
      })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">expresstest</h1>
        </header>
        <p className="App-intro">
          Press a button to interact with server.
        </p>
        <button id="get" onClick={this.handleClick}>GET</button> <br />
        This works
        <br />
        <br /><br />
        <input id="putInput" onChange={this.handleChange}/>
        <button id="put" onClick={this.handleClick}>PUT</button> <br />
        This does not work
        <br />
        <div className="container">
          {this.state.database}
        </div>
      </div>
    );
  }
}

export default App;
