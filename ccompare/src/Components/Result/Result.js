import React from 'react';
import './Result.css';

class Result extends React.Component {
  showResult() {
    if (this.props.showResult === true) {
      return <p>{this.props.menus[0].active} + {this.props.menus[1].active}</p>
    }
  }
  render() {
    return <div><hr />{this.showResult()}</div>
  }
}

export default Result;
