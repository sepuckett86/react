import React from 'react';
import './Button.css';

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.id);
  }

  render() {
    return <button className="button-standard btn" id={this.props.id} onClick={this.handleClick}>
      {this.props.name}
    </button>
  }
}

export default Button;
