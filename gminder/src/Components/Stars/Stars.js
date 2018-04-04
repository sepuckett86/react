import React from 'react';
import './Stars.css';

/* First goal: Generate correct number of Stars
    then onClick, change icon */
class Stars extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      starNumber: 2
    }

    this.handleClick = this.handleClick.bind(this);
  }

/* const stars must be updated to reflect database value */
  makeStarArray() {
    const stars = this.state.starNumber;
    const myArray = [];
    for(let i = stars; i > 0; i--) {
      myArray.push('fas fa-star');
    }
    for(let j = 5-stars; j > 0; j--) {
      myArray.push('far fa-star');
    }
    console.log(myArray);
    return myArray;
  }

  handleClick(event) {
    if(Number(event.currentTarget.id) === this.state.starNumber - 1) {
      this.setState({
        starNumber: 0
      })
    }
  }

  generateKey(index) {
    return `${ index }_${ new Date().getTime() }`;
  }

  render() {
    return(
      <div>
      {
        this.makeStarArray().map((x, i) => {
          return (<span key={ this.generateKey(i) }>
            <button className='star-button' id={i} onClick={this.handleClick}>
              <i className={x}></i></button>
          </span>)
        })
      }
    </div>
      )
  }
}

export default Stars;
