import React, { Component } from 'react';
import './App.css';
import { voteVuejs, voteReact, voteAngular } from './actions/index'

class App extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }
  handleVoteAngular = () => {
    this.store.dispatch(voteAngular());
  }
  handleVoteReact = () => {
    this.store.dispatch(voteReact());
  }
  handleVoteVuejs = () => {
    this.store.dispatch(voteVuejs());
  }
  render() {
    return (
      <div>
        <div className="jumbotron" style={{'textAlign': 'center'}}>
          <img src="codingthesmartway.jpg" height="96" alt="CodingTheSmartWay.com"></img>
          <br />
          <br />
          <h2>What is your favorite front-end development framework 2017?</h2>
          <h4>Click on the logos below to vote!</h4>
          <br />
          <div className="row justify-content-md-center">
            <div className="col-xs-offset-3 col-xs-3">
              <img src="angular-logo.svg" height="96" alt="Angular" onClick={this.handleVoteAngular}></img>
            </div>
            <div className="col-xs-3">
              <img src="react-logo.svg" height="96" alt="React" onClick={this.handleVoteReact}></img>
            </div>
            <div className="col-xs-3">
              <img src="vue-logo.svg" height="96" alt="Vue.js" onClick={this.handleVoteVuejs}></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
