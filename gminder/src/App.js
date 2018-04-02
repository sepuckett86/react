import React, { Component } from 'react';
import './App.css';

import Box from './Components/Box/Box';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gminders: [
        {
          id: '1',
          category: 'prompt',
          collection: 'Happy',
          date: '3-3-18',
          prompt: 'What is a song that made you smile in the past month?',
          answer: 'Legend of Kyrandia Emerald Room Song by Frank Klepacki',
          reason: 'After wandering through endless caves in the game with repetitive music, the music changes for only one scene to a complex, long, cool song. It reminds me of all that is great about old school adventure games.',
          author: null

        },
        {
          id: '2',
          category: 'quote',
          collection: 'Happy',
          date: '3-7-18',
          prompt: null,
          answer: 'May your beer be laid under an enchantment of surpassing excellence for seven years!',
          reason: '',
          author: 'Gandalf, from The Fellowship of the Ring by J.R.R. Tolkien'
        },
        {
          id: '3',
          category: 'custom',
          collection: 'Affirmations',
          date: '3-4-18',
          prompt: null,
          answer: 'Breathe! Drink water. Smile at your thoughts.',
          reason: null,
          author: null
        }

      ],
      display: '0'
    }
    this.nextClick = this.nextClick.bind(this);
  }

  nextClick() {
    let randomNumber = Math.floor(Math.random() * this.state.gminders.length);
    this.setState({
      display: this.state.gminders.randomNumber
    })
  }

  addClick() {
    let randomNumber = Math.floor(Math.random() * this.state.gminders.length);
    this.setState({
      display: this.state.gminders.randomNumber
    })
  }

  moreClick() {
    let randomNumber = Math.floor(Math.random() * this.state.gminders.length);
    this.setState({
      display: this.state.gminders.randomNumber
    })
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
        <Box
          nextClick={this.nextClick}
          addClick={this.addClick}
          moreClick={this.moreClick}
          gminders={this.state.gminders}
          display={this.state.display}
          />
      </div>
      </div>
    );
  }
}

export default App;
