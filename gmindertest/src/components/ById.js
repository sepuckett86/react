import React, { Component } from 'react';

class ById extends Component {

  render() {
    const gminder = this.props.gminder;
    return (
        <div className="container">
          <p>{gminder.gminderID}</p>
        <p>{gminder.mainResponse}</p>
        <p>{gminder.author}</p>
        <p>{gminder.reason}</p>
        </div>
    );
  }
}

export default ById;
