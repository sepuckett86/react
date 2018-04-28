// This file contains the major data and needs to connect with the API.

import React, { Component } from 'react';
import { App } from '../Components/App/App';

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: [
        {
          id: '1',
          items: ['A', 'B', 'C'],
          active: 'A',
          key: 'menu1'
        },
        {
          id: '2',
          items: ['A', 'B', 'C'],
          active: 'A',
          key: 'menu2'
        }
      ],
      showResult: false,
      sites: ['Apples', 'Oranges', 'Bananas'],
      results: [
        {
          site: 'Bananas',
          items: ['A', 'B'],
          result: 85
        },
        {
          site: 'Bananas',
          items: ['A', 'C'],
          result: 30
        },
        {
          site: 'Bananas',
          items: ['B', 'C'],
          result: 56
        },
        {
          site: 'Oranges',
          items: ['A', 'B'],
          result: 83
        },
        {
          site: 'Oranges',
          items: ['A', 'C'],
          result: 35
        },
        {
          site: 'Oranges',
          items: ['B', 'C'],
          result: 59
        },
        {
          site: 'Apples',
          items: ['A', 'B'],
          result: 90
        },
        {
          site: 'Apples',
          items: ['A', 'C'],
          result: 38
        },
        {
          site: 'Apples',
          items: ['B', 'C'],
          result: 60
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
    let menus = this.state.menus;
    let sites = this.state.sites;
    let results = this.state.results;
    let updateResult = this.updateResult;
    let updateActive = this.updateActive;
    let showResult = this.state.showResult;
    return (
      <App
        menus={menus}
        sites={sites}
        results={results}
        updateResult={updateResult}
        showResult={showResult}
        updateActive={updateActive}

        />
    );
  }
}

export default AppContainer;
