import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from '../../scenes/Home/Home';
import About from '../../scenes/About/About';
import Intro from '../../scenes/Intro/Intro';

import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'urlGoesHere'
    }
  }

  componentWillMount() {
    const url = window.location.href;
    this.setState({
      active: url
    })
  }

  render() {
    return (<Router>
      <div>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
          <a className="navbar-brand" id='intro' href="/intro">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              { this.state.active === 'http://localhost:3000/' ?
                (
                  <li className="nav-item active">
                  <a className="nav-link" id='home' href="/">Home
                    <span className="sr-only">(current)</span>
                  </a>
                  </li>
                ) : (
                  <li className="nav-item">
                  <a className="nav-link" id='home' href="/">Home
                  </a>
                  </li>
                )
              }
            { this.state.active === 'http://localhost:3000/about' ?
            (
              <li className="nav-item active">
              <a className="nav-link" id='about' href="/about">About
                <span className="sr-only">(current)</span>
              </a>
              </li>
            ) : (
              <li className="nav-item">
                <a className="nav-link" id='about' href="/about">About</a>
              </li>
            )
            }
            </ul>
          </div>
        </nav>
        <br />
        <Route exact={true} path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/intro" component={Intro}/>
      </div>
    </Router>);
  }
}

export default Navbar;
