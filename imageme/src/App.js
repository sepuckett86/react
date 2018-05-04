import React, { Component } from 'react';
import './App.css';

import Pixabay from './util/Pixabay';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      imageUrl: undefined,
      searchTerm: '',
      searchResults: undefined,
      hits: 0,
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    if (event.target.id === "searchInput") {
      this.setState({searchTerm: event.target.value});
    }
  }

  handleClick(event){
    if (event.target.id === "searchButton") {

      Pixabay.search(this.state.searchTerm).then(searchResults => {
        this.setState({
          searchResults: searchResults
        });
        if (searchResults.hits[0] !== undefined) {
          this.setState({
            hits: 0
          });
        } else {
          alert("No results for this search")
        }

      })


    }
    if (event.target.id === "next") {
      let hits = this.state.hits;
      hits++;
      this.setState({
        hits: hits
      })
    }
    if (event.target.id === "back") {
      let hits = this.state.hits;
        hits--;
        this.setState({
          hits: hits
        })

    }
  }

  render() {
    let imageUrl = undefined;
    if (this.state.searchResults !== undefined && this.state.hits >= 0 && this.state.hits < this.state.searchResults.totalHits) {
    imageUrl = this.state.searchResults.hits[this.state.hits].largeImageURL;
  }
    return (

      <div className="App">
        <header className="App-header">
          <h1 className="App-title">imageme</h1>
        </header>
        <p className="App-intro">
          Enter a search, out pops an image. Using the <a href="https://pixabay.com/en/service/about/api/">Pixabay API</a>.
        </p>

        <input id="searchInput" onChange={this.handleChange}/>
        <button id="searchButton" onClick={this.handleClick}>Search</button>
        <br />
        <br />
        <button id="back" onClick={this.handleClick}>Back</button>
        <button id="next" onClick={this.handleClick}>Next</button>

        { imageUrl !== undefined ?
          (<div className="image_container">
            <img src={imageUrl} alt="image_search"/>
          </div>) : null}
      </div>

    );
  }
}

export default App;
