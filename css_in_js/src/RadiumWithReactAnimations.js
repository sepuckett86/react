import Radium, {StyleRoot} from 'radium';
import React from 'react';
import { styles } from './styles';

// Taken from Radium Github example
export default class RadiumWithReactAnimations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {shouldAnimate: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({shouldAnimate: true}, () => {
        setTimeout(() => this.setState({shouldAnimate: false}), 2000);
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
      <div style={styles.box}>
      <button
        name='action_button'
        style={styles.base}
        onClick={this.handleClick}>
        {this.props.children}
      </button>
        <StyleRoot>
          <div key='rollOut' style={this.animate('rollOut')}><h1>rollOut</h1></div>
          <div key='bounce' style={this.animate('bounce')}><h1>bounce</h1></div>
        </StyleRoot>
      </div>
      </div>
    );
  }
}

RadiumWithReactAnimations = Radium(RadiumWithReactAnimations);
