import React, { Component } from 'react';

import RadiumWithReactAnimations from './RadiumWithReactAnimations';
import Card from './Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RadiumWithReactAnimations>Press Me</RadiumWithReactAnimations>
        <Card>Press Me</Card>
      </div>
    );
  }
}

export default App;
