import React, { Component } from 'react';
import './App.css';

import Box from './Components/Box/Box';
import Add from './Components/Add/Add';
import More from './Components/More/More';

var gminders = [
  {
    id: '1',
    category: 'prompt',
    collection: 'Happy',
    date: '3-3-18',
    prompt: 'What is a song that made you smile in the past month?',
    answer: 'Legend of Kyrandia Emerald Room Song by Frank Klepacki',
    reason: 'After wandering through endless caves in the game with repetitive music, the music changes for only one scene to a complex, long, cool song. It reminds me of all that is great about old school adventure games.',
    author: null,
    stars: '4'

  },
  {
    id: '2',
    category: 'quote',
    collection: 'Happy',
    date: '3-7-18',
    prompt: null,
    answer: 'May your beer be laid under an enchantment of surpassing excellence for seven years!',
    reason: '',
    author: 'Gandalf, from The Fellowship of the Ring by J.R.R. Tolkien',
    stars: '5'
  },
  {
    id: '3',
    category: 'custom',
    collection: 'Affirmations',
    date: '3-4-18',
    prompt: null,
    answer: 'Breathe! Drink water. Smile at your thoughts.',
    reason: null,
    author: null,
    stars: '2'
  }

];

let random = gminders[Math.floor(Math.random() * gminders.length)];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: random,
      add: false,
      more: false
    }

    this.nextClick = this.nextClick.bind(this);
    this.addClick = this.addClick.bind(this);
    this.moreClick = this.moreClick.bind(this);
  }

  nextClick() {
    let randomNumber = Math.floor(Math.random() * gminders.length);
    let newDisplay = gminders[randomNumber];
    this.setState({
      display: newDisplay
    })
  }

  addClick() {
    this.setState({
      add: true
    })

  }

  moreClick() {
    this.setState({
      more: true
    })
  }

  renderWhat() {
    if(this.state.add === false && this.state.more === false) {
      return <Box
        nextClick={this.nextClick}
        addClick={this.addClick}
        moreClick={this.moreClick}
        display={this.state.display}
        />
    }

    if(this.state.add === true && this.state.more === false) {
      return <Add />
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to gminder</h1>
        </header>
        <p className="App-intro">

        </p>
        <div className="container">
        {this.renderWhat()}
      </div>
      </div>
    );
  }
}

export default App;
