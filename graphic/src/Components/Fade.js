import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './Fade.css';

class Fade extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hi',
      showMessage: false
    }
    this.handleClick = this.handleClick.bind(this);
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
          timeout={300}
          classNames="messageFade"
          unmountOnExit>
          <div>{this.state.message}</div>
        </CSSTransition>
      </div>
    )
  }
}

export default Fade;
