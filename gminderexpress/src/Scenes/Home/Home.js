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
        <Random />
      </div>
    )
  }
}

export default Home;
