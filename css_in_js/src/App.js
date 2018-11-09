import React, { Component } from 'react';

import RadiumButton from './RadiumButton';
import RadiumWithReactAnimations from './RadiumWithReactAnimations';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        Hello
        </header>
        <RadiumButton
          kind='primary'
          >Radium Button</RadiumButton>
          <br />
        <RadiumWithReactAnimations
        kind='primary'
        >RadiumWithReactAnimations</RadiumWithReactAnimations>
      </div>
    );
  }
}

export default App;
