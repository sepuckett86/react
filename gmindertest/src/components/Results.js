import React, { Component } from 'react';

class Results extends Component {

  render() {
    const gminders = this.props.gminders;
    return (
        <div className="container">
          <ul>
              {gminders.map((gminder) => {
                return(
                <li key={gminder.gminderID}>
                  {gminder.gminderID}{'\u00A0'}
                  {gminder.mainResponse}</li>
                )
            })}
            </ul>

        </div>
    );
  }
}

export default Results;
