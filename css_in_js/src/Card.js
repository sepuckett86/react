import Radium, {StyleRoot} from 'radium';
import React from 'react';
import { styles } from './styles';

// Taken from Radium Github example
export default class RadiumWithReactAnimations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldAnimate: false,
      cardShowing: 0,
      cards: [
        {
          src: 'https://res.cloudinary.com/sepuckett86/image/upload/v1513176676/IMG_3794_mcceu1.jpg',
          text: '0: Some quick example text to build on the card title and make up the bulk of the content.'
        },
        {
          src: 'https://res.cloudinary.com/sepuckett86/image/upload/v1513176676/IMG_8154_iwiis1.jpg',
          text: '1: Some quick example text to build on the card title and make up the bulk of the content.'
        },
        {
          src: 'https://res.cloudinary.com/sepuckett86/image/upload/v1513095416/IMG_7240_q9dadh.jpg',
          text: '2: Some quick example text to build on the card title and make up the bulk of the content.'
        },
        {
          src: 'https://res.cloudinary.com/sepuckett86/image/upload/v1513095419/IMG_3811_a3rbku.jpg',
          text: '3: Some quick example text to build on the card title and make up the bulk of the content.'
        },
    ]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let newCard;
    if (this.state.cardShowing < this.state.cards.length - 1) {
      newCard = this.state.cardShowing + 1;
    } else {
      newCard = 0;
    }
    this.setState(
      {shouldAnimate: true}, () => {
        setTimeout(() => this.setState(
          {cardShowing: newCard}, () => {
            setTimeout(() => this.setState(
              {shouldAnimate: false}), 1000)
          }), 1500);
      });
  }


  animate(animation) {
    if (this.state.shouldAnimate) {
      return styles[animation];
    } else {
      return styles.empty
    }
  }

  displayCard(card) {
    return(
      <div className="card">
        <img className="card-img-top" src={card.src} alt="Card" />
        <div className="card-body">
          <p className="card-text">{card.text}</p>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <div style={styles.box}>
          <button
            name='action_button'
            style={styles.base}
            onClick={this.handleClick}>
            {this.props.children}
          </button>
          <div className="row">
            <div className="col">
              <StyleRoot>
                <div key='fadeOut' style={this.animate('fadeOut')}>
                {this.displayCard(this.state.cards[this.state.cardShowing])}
                </div>
              </StyleRoot>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

RadiumWithReactAnimations = Radium(RadiumWithReactAnimations);
