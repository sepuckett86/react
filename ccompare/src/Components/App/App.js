import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Compare from '../Compare/Compare';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: [
        {
          id: '1',
          items: ['A', 'B', 'C'],
          active: 'A',
          key: 'unique1'
        },
        {
          id: '2',
          items: ['A', 'B', 'C'],
          active: 'A',
          key: 'unique2'
        }
      ],
      showResult: false,
      results: [
        {
          site: 'Bananas',
          item1: 'A',
          item2: 'A',
          result: 'AA Bananas'
        },
        {
          site: 'Bananas',
          item1: 'A',
          item2: 'B',
          result: 'AB Bananas'
        },
        {
          site: 'Bananas',
          item1: 'A',
          item2: 'C',
          result: 'AC Bananas'
        },
      ]
    }

    this.updateActive = this.updateActive.bind(this);
    this.updateResult = this.updateResult.bind(this);
  }

  updateActive(id, active) {
    let menus = this.state.menus;
    for (let i=0; i<this.state.menus.length; i++) {
      if (this.state.menus[i].id === id) {
        menus[i].active = active;
        console.log(active);
        console.log(menus);
        this.setState({
          menus: menus
        })
      }
    }
  }

  updateResult() {
    if (this.state.showResult === false) {
      this.setState({
        showResult: true
      })
    } 
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to CCompare</h1>
        </header>
        <p className="App-intro">
          <br />
          Pick two options
        </p>
        <div className="container">
          <Compare
            updateMenu={this.updateActive}
            menus={this.state.menus}
            showResult={this.state.showResult}
            updateResult={this.updateResult} />
        </div>

      </div>
    );
  }
}

export default App;
