import React from 'react';
import './Stars.css';

// Note: this uses bootstrap modals and the actual modal is defined outside of responsive design.

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
    // check if user is serious with popup window w/button
    // change database -- to do later
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

  // Changes the stars for one gminder in this.state.gminders
// setStars(starNum, id) {
//   let gmindersArr = this.state.gminders;
//   gmindersArr.forEach(gminder => {
//     if (gminder.id === id) {
//       gminder.stars = starNum;
//     }
//   })
//   this.setState({
//     gminders: gmindersArr
//   })
// }

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
