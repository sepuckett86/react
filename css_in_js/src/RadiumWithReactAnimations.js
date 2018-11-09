import Radium, {StyleRoot} from 'radium';
import React from 'react';
import color from 'color';
import PropTypes from 'prop-types';
import { bounce, rollOut } from 'react-animations';

// Taken from Radium Github example
export default class RadiumWithReactAnimations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {shouldAnimate: false};
    this.handleClick = this.handleClick.bind(this);
  }
  static propTypes = {
    kind: PropTypes.oneOf(['primary', 'warning']).isRequired
  };

  handleClick(e) {
    this.setState({shouldAnimate: true}, () => {
        setTimeout(() => this.setState({shouldAnimate: false}), 1000);
      });
  }

  animate(animation) {
    if (this.state.shouldAnimate) {
      return styles[animation];
    } else {
      return styles.empty
    }
  }
  render() {
    // Radium extends the style attribute to accept an array. It will merge
    // the styles in order. We use this feature here to apply the primary
    // or warning styles depending on the value of the `kind` prop. Since its
    // all just JavaScript, you can use whatever logic you want to decide which
    // styles are applied (props, state, context, etc).
    return (
      <div>
      <button
        name='action_button'
        style={[
          styles.base,
          styles[this.props.kind]
        ]}
        onClick={this.handleClick}>
        {this.props.children}
      </button>
      <div style={styles.box}>
        <StyleRoot>
          <div key='rollOut' name='rollOut' style={this.animate('rollOut')}><h1>Header</h1></div>
          <div key='bounce' name='bounce' style={this.animate('bounce')}>bounce</div>
        </StyleRoot>
      </div>
      </div>
    );
  }
}

RadiumWithReactAnimations = Radium(RadiumWithReactAnimations);

// You can create your style objects dynamically or share them for
// every instance of the component.
var styles = {
  base: {
    color: '#fff',

    // Adding interactive state couldn't be easier! Add a special key to your
    // style object (:hover, :focus, :active, or @media) with the additional rules.
    ':hover': {
      background: color('#0074d9').lighten(0.2)
    }
  },

  primary: {
    background: '#0074D9'
  },

  warning: {
    background: '#FF4136'
  },

  box: {
    borderStyle: 'solid',
    margin: '2px',
    padding: '100px',
    height: '300px',
    width: '300px',
    textAlign: 'center'
  },

  empty: {

  },

  bounce: {
      animation: 'x 1s',
      animationName: Radium.keyframes(bounce, 'bounce')
  },

  rollOut: {
      animation: 'x 1s',
      animationName: Radium.keyframes(rollOut, 'rollOut')
  }
};
