import React from 'react';
import './Button.css';

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick();
  }

  render() {
    return <button className="button-standard btn" onClick={this.handleClick}>
      {this.props.name}
    </button>
  }
}

export default Button;
