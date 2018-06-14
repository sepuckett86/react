import React, { Component } from 'react';

import Button from './Components/Button/Button';

// Scene imports
import Add from './Scenes/Add/Add';
import More from './Scenes/More/More';
import Random from './Scenes/Random/Random';
import Edit from './Scenes/Edit/Edit';
import Print from './Scenes/Print/Print';
//

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'box'
    }

    this.nextClick = this.nextClick.bind(this);
    this.backClick = this.backClick.bind(this);
    this.addClick = this.addClick.bind(this);
    this.moreClick = this.moreClick.bind(this);
    this.noneClick = this.noneClick.bind(this);
    this.boxClick = this.boxClick.bind(this);

  }

  addClick() {
    if (this.state.display !== 'add') {
      this.setState({display: 'add'})
    }
  }

  moreClick() {
    if (this.state.display !== 'more') {
      this.setState({display: 'more'})
    }
  }

  boxClick() {
    if (this.state.display !== 'box') {
      this.setState({display: 'box'})

    }
  }

  noneClick() {
    if (this.state.display !== 'none') {
      this.setState({display: 'none'})
    }
  }

  // Button methods

  // Sets a new random gminder as state and accounts for back/forward ability
  nextClick() {
    // Check that there we haven't gone back yet
    if (this.state.back === 0) {
      // Check that there are gminders in database
      if (this.state.gminders.length !== 0) {
        // If we've gone through everything, clear history.
        if (this.state.previous.length === this.state.gminders.length) {
          alert("You've gone through all of your gminders. Reload to reset.")
        } else {
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

              }
            else {
              // Do nothing
            }

            if (unique === true) {
              let previous = this.state.previous;
              previous.push(random);
              this.setState({current: random, previous: previous})
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
      this.setState({back: back, current: next})
    }
  }

  backClick() {
    // If nothing to go back to
    if (this.state.previous.length === 1) {
      alert("Nothing there. Go forward :)");
    }
    // If at beginning of previous array
    if (this.state.previous.length === this.state.back + 1) {
      alert("Nothing there. Go forward :)")// If not at beginning and have something to go back to);
    } else if (this.state.previous.length > 1) {
      let current = this.state.previous[this.state.previous.length - 2 - this.state.back];
      let back = this.state.back + 1;
      this.setState({current: current, back: back})
    }
  }

  renderWhat() {
    if (this.state.display === 'box') {
      if (this.state.current !== 'empty') {
        return <Random nextClick={this.nextClick} backClick={this.backClick} addClick={this.addClick} moreClick={this.moreClick} display={this.state.current} starFun={this.setStars} gms={this.state.gminders} prompts={this.state.prompts}/>
      } else if (this.state.gminders.length !== 0) {
        return <Random nextClick={this.nextClick} backClick={this.backClick} addClick={this.addClick} moreClick={this.moreClick} display={this.state.gminders[0]} starFun={this.setStars} gms={this.state.gminders} prompts={this.state.prompts}/>
      }
    }

    if (this.state.display === 'add') {
      return <Add boxClick={this.boxClick} newGminder={this.newGminder} prompts={this.state.prompts}/>
    }
    if (this.state.display === 'more') {
      return <More boxClick={this.boxClick} gms={this.state.gminders} newGminder={this.newGminder} prompts={this.state.prompts} noneClick={this.noneClick}/>
    }

    if (this.state.display === 'none') {
      return <div></div>
    }

    if (this.state.gminders.length === 0) {
      return (<div>
        <div className="box">
          <p>Looks like you don't have any gminders yet! Click below to add content.
          </p>

        </div>
        <br/>
        <Button name="Get Started" onClick={this.addClick}/>
      </div>)
    }
  }
  render() {
    return (
      <div className="container gminder">
        <p>Home</p>
        <Random />
      </div>
    )
  }
}

export default Home;
