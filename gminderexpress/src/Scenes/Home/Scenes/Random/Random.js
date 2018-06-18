import React, { Component } from 'react';

import Prompt from './Components/Prompt/Prompt';
import Quote from './Components/Quote/Quote';
import Custom from './Components/Custom/Custom';
import Button from '../../Components/Button/Button';

// connect to backend
import Gminder from '../../../../Utils/Gminder'

import './Random.css'

class Random extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gminders: '',
      prompts: [],
      current: {
      },
      previous: [],
      back: 0
    }
    this.nextClick = this.nextClick.bind(this);
    this.backClick = this.backClick.bind(this);
  }

  componentWillMount() {
    // Get data from database
    Gminder.getGminders().then(res => this.setState({gminders: res.express})).catch(err => console.log(err)).then(() => {
      Gminder.getPrompts().then(res => this.setState({prompts: res.express})).catch(err => console.log(err)).then(() => {
        // Check if there is data in gminders
        if (this.state.gminders.length !== 0) {
          let random = this.state.gminders[Math.floor(Math.random() * this.state.gminders.length)];
          let previous = this.state.previous;
          // Add new gminder to previous array
          previous.push(random);
          this.setState({current: random, previous: previous, back: 0})
          this.props.setGminder(random);
          if(random.promptID) {
            this.props.setPrompt(random.promptID);
          }
          // In case that gminders is empty);
        } else if (this.state.gminders.length === 0) {
          // Do nothing
        } else {
          console.log('Error, gminders not correct object')
        }
      });
    })
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
            brake--;
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
    let gminder = this.state.current;
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

  starChange() {

  }

  render() {
    return (
        <div className="container">

            <div>
            <span>
              <button className="btn arrow-button" onClick={this.backClick}><i className="fas fa-arrow-left"></i> </button>
            </span>
            {/* Spaces */}
            {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
            <span>
            <button className="btn arrow-button" onClick={this.nextClick}> <i className="fas fa-arrow-right"></i></button>
            </span>
            </div>

            <div className="random-box">

        			{this.chooseDisplay()}
              <div className="edit-print">

              <a href="edit.php" className="button-clear"><i className="fas fa-edit"></i></a>
              <a href="print.php" className="button-clear"><i className="fas fa-print"></i></a>
            </div>
            </div>
            <br />

            <div>
            <div className="row">
            <div className="col col-12 col-sm-6">
              <Button
                id='add'
                name="Add"
                onClick={this.props.changeDisplay}
                />
            </div>
            <div className="col col-12 col-sm-6">
              <Button
                id='more'
                name="More"
                onClick={this.props.changeDisplay}
                />
            </div>
          </div>
          </div>
          <br />
          </div>
    );
  }
}

export default Random;
