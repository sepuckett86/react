import color from 'color';
import Radium from 'radium';
import { bounce, rollOut, rollIn, fadeOut, fadeIn } from 'react-animations';

export const styles = {
  base: {
    color: '#fff',
    background: '#0074D9',
    margin: '2px',
    padding: '10px',
    fontSize: '24px',
    borderRadius: '5px',
    // Adding interactive state couldn't be easier! Add a special key to your
    // style object (:hover, :focus, :active, or @media) with the additional rules.
    ':hover': {
      background: color('#0074d9').lighten(0.2),
      cursor: 'pointer'
    }
  },

  box: {
    borderStyle: 'solid',
    margin: '2px',
    padding: '100px',
    textAlign: 'center'
  },

  empty: {

  },

  bounce: {
      animation: 'x 2s',
      animationName: Radium.keyframes(bounce, 'bounce')
  },

  rollOut: {
      animation: 'x 2s',
      animationName: Radium.keyframes(rollOut, 'rollOut')
  },

  rollIn: {
      animation: 'x 2s',
      animationName: Radium.keyframes(rollIn, 'rollIn')
  },
  fadeOut: {
      animation: 'x 2s',
      animationName: Radium.keyframes(fadeOut, 'fadeOut')
  },
  fadeIn: {
      animation: 'x 2s',
      animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
};
