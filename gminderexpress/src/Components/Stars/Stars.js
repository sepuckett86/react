import React from 'react';
import './Stars.css';

/* First goal: Generate correct number of Stars
    then onClick, change icon */
class Stars extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      stars : Number(this.props.gminder.rating)
    }
    this.handleClick = this.handleClick.bind(this);
  }

/* const stars must be updated to reflect database value */
  makeStarArray() {
    let stars = this.props.gminder.rating;
    let myArray = [];
    for(let i = stars; i > 0; i--) {
      myArray.push('fas fa-star');
    }
    for(let j = 5-stars; j > 0; j--) {
      myArray.push('far fa-star');
    }
    return myArray;
  }

  handleClick(event) {
    let stars = Number(event.currentTarget.id) + 1;
    if (stars === this.state.stars) {
      this.props.starFun(0, this.props.gminder.id);
      this.setState({
        stars: 0
      })
    } else {
    this.props.starFun(stars, this.props.gminder.id);
    this.setState({
      stars: stars
    })}
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
