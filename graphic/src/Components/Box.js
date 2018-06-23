import React, { Component } from 'react';
import { Transition } from 'react-transition-group';


class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    }

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    if (event.target.id === 'toggle') {
      this.setState({
        show: !this.state.show,
      });
    }
  };

  render() {
    return(
      <div className='box'>
        <p>Hi, I'm a box</p>
        {console.log(this.state)}
        <button id='toggle' onClick={this.handleClick}>Toggle</button>
        <br /><br />
        <Transition
            in={this.state.show}
            timeout={500}
            unmountOnExit
          >
            {state => {
              switch (state) {
                case 'entering':
                  return 'Entering…';
                case 'entered':
                  return 'Entered!';
                case 'exiting':
                  return 'Exiting…';
                case 'exited':
                  return 'Exited!';
                default:
                  break;
              }
            }}
          </Transition>
      </div>
    )
  }
}

export default Box;
