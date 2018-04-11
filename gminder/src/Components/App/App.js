import React, { Component } from 'react';
import './App.css';
import logo from './logo.png';

import Box from '../Box/Box';
import Add from '../Add/Add';
import More from '../More/More';
import Button from '../Button/Button';

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
          reason: 'One of the best read-out-loud moments in the book',
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
        },
        {
          id: '4',
          category: 'quote',
          collection: 'Happy',
          date: '3-6-18',
          prompt: null,
          answer: `This is the story: It was Spring. The warm sunshine and soft breezes were trying to lure students away from their classes.\
        Santayana was seated at his desk reading to his students. His listeners were sitting, or reclining, in various attitudes of inattention.\
        Santayana’s voice trailed off, his eyes traveled over his students, and fixed themselves on a tree which grew outside the window.\
        Its leaves were small and tender, and of the green green of new leaves. Santayana closed the book. A short silence elapsed.\
        He rose, and said: "Gentlemen, it is Spring!" He took his hat and never returned.`,
          reason: "A nice story",
          author: "A letter in a book by Will Durant, On the Meaning of Life",
          stars: '4'
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
      current: 'empty',
      previous: [],
      back: 0,
    }
    this.componentWillMount = this.componentWillMount.bind(this);
    this.nextClick = this.nextClick.bind(this);
    this.backClick = this.backClick.bind(this);
    this.addClick = this.addClick.bind(this);
    this.moreClick = this.moreClick.bind(this);
    this.boxClick = this.boxClick.bind(this);
    this.setStars = this.setStars.bind(this);
    this.newGminder = this.newGminder.bind(this);
  }


  // Critical function to know--this completes upon first page load before render
  componentWillMount() {
    // Check if there is data in gminders
    if (this.state.gminders.length !== 0){
      let random = this.state.gminders[Math.floor(Math.random() * this.state.gminders.length)];
      let previous = this.state.previous;
      // Add new gminder to previous array
      previous.push(random);
    this.setState({
      current: random,
      previous: previous,
      back: 0 });
      console.log(this.state.previous)
  }
    // In case that gminders is empty
    else if (this.state.gminders.length === 0) {
      // Do nothing
    } else {
      console.log('Error, gminders not correct object')
    }
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

  newGminder(gminder) {
    let gminders = this.state.gminders;
    gminders.push(gminder);
    this.setState({
      gminders: gminders
    })
  }

// Button methods

  // Sets a new random gminder as state and accounts for back/forward ability
  nextClick() {
    // Check that there we haven't gone back yet
    if (this.state.back === 0) {
      // Check that there are gminders in database
      if (this.state.gminders.length !== 0){
        // If we've gone through everything, clear history.
        if (this.state.previous.length === this.state.gminders.length) {
          alert("You've gone through all of your gminders. Reload to reset.")
        }

        else {
        let a = true;
        let brake = 20;
        while (a === true && brake > 0) {
          let unique = true;
          let previous = this.state.previous;
        // Pick random gminder and save it
          let random = this.state.gminders[Math.floor(Math.random() * this.state.gminders.length)];

        // Make sure we haven't already seen this one

          for (let i = 0; i < previous.length; i++)
            if (previous[i] === random) {
              unique = false;
              console.log(false);
            } else {
              console.log('Hi');
            }

          if (unique === true) {
            let previous = this.state.previous;
            previous.push(random);
            this.setState({
              current: random,
              previous: previous
            })
            console.log(this.state.previous);
            a = false;
          }
          brake--
        } // End while loop
          }
        }
        }
        // If no gminders in database
        if (this.state.gminders.length === 0) {
        console.log('There are no gminders');

        }

      // If we have gone back and are going forward again
      if (this.state.back !== 0) {
        let next = this.state.previous[this.state.previous.length - this.state.back];
        let back = this.state.back - 1;
        this.setState({
          back: back,
          current: next,
        })
    }
  }

  backClick() {
    // If nothing to go back to
    if (this.state.previous.length === 1) {
      alert("Nothing there. Go forward :)");
    }
    // If at beginning of previous array
    if (this.state.previous.length === this.state.back + 1) {
      alert("Nothing there. Go forward :)");
    }
    // If not at beginning and have something to go back to
    else if (this.state.previous.length > 1) {
      let current = this.state.previous[this.state.previous.length - 2 - this.state.back];
      let back = this.state.back + 1;
      this.setState({
        current: current,
        back: back
      })
    }
    console.log(this.state.back)
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
      if (this.state.current !== 'empty') {
      return <Box
        nextClick={this.nextClick}
        backClick={this.backClick}
        addClick={this.addClick}
        moreClick={this.moreClick}
        display={this.state.current}
        starFun={this.setStars}
        gms={this.state.gminders}
        />
      }
      else if(this.state.gminders.length !== 0) {
        return <Box
          nextClick={this.nextClick}
          backClick={this.backClick}
          addClick={this.addClick}
          moreClick={this.moreClick}
          display={this.state.gminders[0]}
          starFun={this.setStars}
          gms={this.state.gminders}
          />
      }
    }

    if(this.state.display === 'add') {
      return <Add
              boxClick={this.boxClick}
              newGminder={this.newGminder}
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

    if (this.state.gminders.length === 0) {
      return (<div>
        <div className="box">
        <p>Looks like you don't have any gminders yet! Click below to add content.
            </p>

          </div>
          <br />
          <Button
          name="Get Started"
          onClick={this.addClick}
          />
        </div>)
  }
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"><img src={logo} className="App-logo" alt="logo" />Gminder</h1>
        </header>

        <div className="container gminder">

          {this.renderWhat()}

        </div>

      </div>
    );
  }
}

export default App;
