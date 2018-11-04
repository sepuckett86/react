import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './GradientFade.css';

class GradientFade extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hi',
      showMessage: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      showMessage: true
    })
  }

  handleClick(event) {
    this.setState({
      showMessage: !this.state.showMessage
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <CSSTransition
          in={this.state.showMessage}
          timeout={2000}
          classNames="gradientFade"
          unmountOnExit>
          <div className='gradient'>{this.state.message}</div>
        </CSSTransition>
      </div>
    )
  }
}

export default GradientFade;
