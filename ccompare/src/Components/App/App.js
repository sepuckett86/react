import React, { Component } from 'react';
import './App.css';

import Compare from '../Compare/Compare';

export class App extends Component {
  displayName: 'App';
  propTypes: {
    menus: PropTypes.array,
    sites: PropTypes.array,
    results: PropTypes.array,
    updateResult: PropTypes.func,
    showResult: PropTypes.bool,
    updateActive: PropTypes.func
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-title">CCompare</div>
        </header>
        <p className="App-intro">
          <br />
          Pick two options
        </p>
        <div className="container">
          <Compare
            updateMenu={this.props.updateActive}
            menus={this.props.menus}
            showResult={this.props.showResult}
            updateResult={this.props.updateResult}
            sites={this.props.sites}
            results={this.props.results} />
        </div>

      </div>
    );
  }
}

export default App;
