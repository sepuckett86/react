import React, { Component } from 'react';

import Button from './Components/Button/Button';

// Scene imports
import Add from './Scenes/Add/Add';
import More from './Scenes/More/More';
import Random from './Scenes/Random/Random';
import Edit from './Scenes/Edit/Edit';
import Print from './Scenes/Print/Print';
import Manager from './Scenes/Manager/Manager'
//

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'random',
      currentGminder: {},
      currentPrompt: {},
      gminders: [],
      prompts: []
    }


    this.addClick = this.addClick.bind(this);
    this.moreClick = this.moreClick.bind(this);
    this.noneClick = this.noneClick.bind(this);
    this.randomClick = this.randomClick.bind(this);
    this.setGminder = this.setGminder.bind(this);
    this.setPrompt = this.setPrompt.bind(this);
    this.setGminders = this.setGminders.bind(this);
    this.setPrompts = this.setPrompts.bind(this);
    this.changeDisplay = this.changeDisplay.bind(this);
  }

  changeDisplay(display) {
    if (display === 'add') {
      if (this.state.display !== 'add') {
        this.setState({display: 'add'})
      }
    }
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

  randomClick() {
    if (this.state.display !== 'random') {
      this.setState({display: 'random'})

    }
  }

  noneClick() {
    if (this.state.display !== 'none') {
      this.setState({display: 'none'})
    }
  }

  // Functions to set state of home to log current gminder(s) and prompt(s),
  // for use in multiple displays. These are NOT calls to the database. Calls
  // to the database will happen in Scenes of Home, because the database may be altered
  // by specific Scenes.
  setGminder(gminder) {
    this.setState({currentGminder: gminder})
  }

  setPrompt(prompt) {
    this.setState({currentPrompt: prompt})
  }

  setGminders(gminders) {
    this.setState({gminders: gminders})
  }

  setPrompts(prompts) {
    this.setState({prompts: prompts})
  }
  //

  renderWhat() {
    if (this.state.display === 'random') {
      if (this.state.current !== 'empty') {
        return <Random
          nextClick={this.nextClick}
          backClick={this.backClick}
          addClick={this.addClick}
          moreClick={this.moreClick}
          changeDisplay={this.changeDisplay}
          gminder={this.state.currentGminder}
          prompt={this.state.currentPrompt}
          setGminder={this.setGminder}
          setPrompt={this.setPrompt}
          setGminders={this.setGminders}
          setPrompts={this.setPrompts}
          starFun={this.setStars} />
      } else if (this.state.gminders.length !== 0) {
        return <Random nextClick={this.nextClick} backClick={this.backClick} addClick={this.addClick} moreClick={this.moreClick} display={this.state.gminders[0]} starFun={this.setStars} gms={this.state.gminders} prompts={this.state.prompts}/>
      }
    }

    if (this.state.display === 'add') {
      return <Add
        randomClick={this.randomClick}
        prompt={this.state.currentPrompt}
        setPrompt={this.setPrompt}
      />
    }

    if (this.state.display === 'more') {
      return <More
        randomClick={this.randomClick}
        noneClick={this.noneClick}/>
    }
    if (this.state.display === 'edit') {
      return <Edit
        randomClick={this.randomClick}
        gminder={this.state.currentGminder}
        prompt={this.state.currentPrompt}/>
    }
    if (this.state.display === 'print') {
      return <Print
        randomClick={this.randomClick}
        gminder={this.state.currentGminder}
        prompt={this.state.currentPrompt}/>
    }

    if (this.state.display === 'none') {
      return <div></div>
    }

    if (this.state.gminders.length === 0) {
      return (<div>
        <div className="random">
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
        {this.renderWhat()}
      </div>
    )
  }
}

export default Home;
