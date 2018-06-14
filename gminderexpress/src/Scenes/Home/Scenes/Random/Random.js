import React, { Component } from 'react';

import Prompt from './Components/Prompt/Prompt';
import Quote from './Components/Quote/Quote';
import Custom from './Components/Custom/Custom';
import Button from '../../Components/Button/Button';

class Random extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gminders: '',
      prompts: '',
      gminderOnDisplay: {
        id: '1',
        category: 'prompt',
        collection: 'Favorites',
        date: '3-3-18',
        prompt: 'What is a song that made you smile in the past month?',
        answer: 'Legend of Kyrandia Emerald Room Song by Frank Klepacki',
        reason: 'After wandering through endless caves in the game with repetitive music, the music changes for only one scene to a complex, long, cool song. It reminds me of all that is great about old school adventure games.',
        author: null,
        stars: '4'

      }
    }
    this.nextClick = this.nextClick.bind(this);
    this.backClick = this.backClick.bind(this);
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

  chooseDisplay() {
    let gminder = this.state.gminderOnDisplay;
    let prompts = this.state.prompts;
    if(gminder.category === 'prompt') {
      return <Prompt
        gminder={gminder}
        prompts={prompts}
        />
    }
    if(gminder.category === 'quote') {
      return <Quote
        gminder={gminder}
        />
    }
    if(gminder.category === 'custom') {
      return <Custom
        gminder={gminder}
        />
    } else {
      return <p>Category Error</p>
    }
  }
  render() {
    return (
        <div>
          {/*
            Responsive Design
            For small screen (phone)
          */}
          <div className="d-sm-none">
            <div className="backfill">
              <div>
              <span className="">
                <button className="button-span-2" onClick={this.props.backClick}><i className="fas fa-arrow-left"></i> </button>
              </span>
              {'\u00A0'}
              <span className="">
              <button className="button-span-2" onClick={this.props.nextClick}> <i className="fas fa-arrow-right"></i></button>
              </span>
              </div>

            {this.chooseDisplay()}

            <hr />
            </div>
          <br />

            {/* Check whether there is more than one gminder stored */}
            { this.state.gminders.length > 1 ?
              <div>
                <div className="row">

            <div className="col col-12 col-sm-4">
              <Button
                name="Add"
                onClick={this.props.addClick}
                />
            </div>
            <div className="col col-12 col-sm-4">
              <Button
                name="More"
                onClick={this.props.moreClick}
                />
            </div>
          </div>
          </div>
            : null
          }
          { this.state.gminders.length === 1 ?
            <div>
            <div className="row">
            <div className="col col-12 col-sm-4">
              <Button
                name="Add"
                onClick={this.props.addClick}
                />
            </div>
            <div className="col col-12 col-sm-4">
              <Button
                name="More"
                onClick={this.props.moreClick}
                />
            </div>
          </div>
          </div>
            : null
          }

          </div>

          {/* For large screen */}
          <div className="d-none d-sm-block">
            <div>
            <span>
              <button className="btn button-span-3" onClick={this.props.backClick}><i className="fas fa-arrow-left"></i> </button>
            </span>
            {/* Spaces */}
            {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
            <span>
            <button className="btn button-span-3" onClick={this.props.nextClick}> <i className="fas fa-arrow-right"></i></button>
            </span>
            </div>

            <div className="box">

        			{this.chooseDisplay()}
              <div className="alignR">
                <br />
              <a href="edit.php" className="button-clear"><i className="fas fa-edit"></i></a>
              <a href="print.php" className="button-clear"><i className="fas fa-print"></i></a>
            </div>
            </div>
            <br />

          { this.state.gminders ?
            <div>
            <div className="row">
            <div className="col col-sm-6">
              <Button
                name="Add"
                onClick={this.props.addClick}
                />
            </div>
            <div className="col col-sm-6">
              <Button
                name="More"
                onClick={this.props.moreClick}
                />
            </div>
          </div>
          </div>
            : null
          }

          </div>

          <br />
        </div>

    );
  }
}

export default Random;
