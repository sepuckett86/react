import React, { Component } from 'react';
import './App.css';

import Box from '../Box/Box';
import Add from '../Add/Add';
import More from '../More/More';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gminders: [
        {
          id: '1',
          category: 'prompt',
          collection: 'Favorites',
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

      ],
      prompts: [
        {
          id: 'prompt1',
          collection: 'Happy',
          prompt: 'Share a fun moment',

        },
        {
          id: 'prompt2',
          collection: 'Happy',
          prompt: 'Explain why you are smiling',

        },
        {
          id: 'prompt3',
          collection: 'Happenings',
          prompt: 'Share a time when you were proud of yourself',

        },
        {
          id: 'prompt4',
          collection: 'Favorites',
          prompt: 'What is a song that made you smile in the past month?',

        },
        {
          id: 'prompt5',
          collection: 'Favorites',
          prompt: 'Who is your favorite person? Why?',

        }
      ],
      display: 'box',
      oneGminder: 'empty'
    }
    this.componentWillMount = this.componentWillMount.bind(this);
    this.nextClick = this.nextClick.bind(this);
    this.addClick = this.addClick.bind(this);
    this.moreClick = this.moreClick.bind(this);
    this.boxClick = this.boxClick.bind(this);
    this.setStars = this.setStars.bind(this);
  }


  // Critical function to know--this completes upon first page load before render
  componentWillMount() {
    let random = this.state.gminders[Math.floor(Math.random() * this.state.gminders.length)];
    this.setState({ oneGminder: random });
    }

// These methods update database information

  // Changes the stars for one gminder in this.state.gminders
  setStars(starNum, id) {
    let gmindersArr = this.state.gminders;
    gmindersArr.forEach(gminder => {
      if (gminder.id === id) {
        gminder.stars = starNum;
      }
    })
    this.setState({
      gminders: gmindersArr
    })
  }

  newGminder() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0!
    let yyyy = today.getFullYear();

    if(dd<10) {
    dd = '0' + dd;
    }

    if(mm<10) {
    mm = '0' + mm;
    }

    today = mm + '/' + dd + '/' + yyyy;

      const newGminder = {
        id: '1',
        category: 'prompt',
        collection: 'Favorites',
        date: today,
        prompt: 'What is a song that made you smile in the past month?',
        answer: 'Legend of Kyrandia Emerald Room Song by Frank Klepacki',
        reason: 'After wandering through endless caves in the game with repetitive music, the music changes for only one scene to a complex, long, cool song. It reminds me of all that is great about old school adventure games.',
        author: null,
        stars: '4'
      }
    console.log(newGminder);
    alert(newGminder);
  }


// Button methods

  // Sets a new random gminder as state
  nextClick() {
    let random = this.state.gminders[Math.floor(Math.random() * this.state.gminders.length)];
    this.setState({
      oneGminder: random
    })
  }

  addClick() {
    if(this.state.display !== 'add') {
      this.setState({
      display: 'add'
      })
    }
  }

  moreClick() {
    if(this.state.display !== 'more') {
      this.setState({
      display: 'more'
      })
    }
  }

  boxClick() {
    if(this.state.display !== 'box') {
      this.setState({
      display: 'box'
      })
    }
  }

  renderWhat() {
    if(this.state.display === 'box') {

      // On first page load, this will be true. Trigger a setting of state from a
      // random gminder from this.state.gminders, while not relying on state
      // to load page contents (display={random})
      if (this.state.oneGminder === 'empty') {
      return <p>Error</p>
      }
      // Accounting for re-rendering when stars are changed. Don't want gminder to change, too.
      // (display={this.state.oneGminder})
      if (this.state.oneGminder !== 'empty') {
      return <Box
        nextClick={this.nextClick}
        addClick={this.addClick}
        moreClick={this.moreClick}
        display={this.state.oneGminder}
        starFun={this.setStars}
        gms={this.state.gminders}
        />
      }
    }

    if(this.state.display === 'add') {
      return <Add
              boxClick={this.boxClick}
              newFun={this.newGminder}
              prompts={this.state.prompts}
            />
    }
    if(this.state.display === 'more') {
      return <More
              boxClick={this.boxClick}
              gms={this.state.gminders}
              prompts={this.state.prompts}

            />
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
