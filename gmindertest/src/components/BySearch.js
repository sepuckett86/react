import React, { Component } from 'react';

class BySearch extends Component {

  render() {
    const searchResults = this.props.searchResults;
    return (
        <div className="container">
          <ul>
              {searchResults.map((searchResult) => {
                return(
                <li key={searchResult.gminderID}>
                  {searchResult.gminderID}{'\u00A0'}
                  {searchResult.mainResponse}</li>
                )
            })}
            </ul>
        </div>
    );
  }
}

export default BySearch;
