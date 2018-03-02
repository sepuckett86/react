import React from 'react';
import './RandomQuote.css';

import { Button } from '../Button/Button';

export class RandomQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quote: this.props.start };
    this.handleClick = this.handleClick.bind(this);
  };



  randomize(myArray) {
    let rando = Math.floor(Math.random() * myArray.length);
    let randoQuote = myArray[rando];
    return randoQuote;
  }

  handleClick() {
    this.setState({
      quote: this.randomize(this.props.quoteArray)
    });
  }

  render() {
    return (
      <div className='box'>
      <p>{this.state.quote}</p>
      <Button onClick={this.handleClick} name={this.props.name}/>
      </div>
    )
  }
}
