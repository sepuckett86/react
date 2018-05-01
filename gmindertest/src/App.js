import React, { Component } from 'react';
import './App.css';
import Gminder from './util/Gminder';
import Results from './components/Results';
import ById from './components/ById';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gminders: [],
      results: false,
      gminder: {},
      id: '',
      byId: false,
      create: '',
      idToDelete: null
    }

    this.setGminders = this.setGminders.bind(this);
    this.showResults = this.showResults.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.showById = this.showById.bind(this);
    this.loadById = this.loadById.bind(this);
    this.handleCreateChange = this.handleCreateChange.bind(this);
    this.handleCreateClick = this.handleCreateClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleDeleteChange = this.handleDeleteChange.bind(this);
  }

  componentWillMount(){
    this.setGminders();
  }

  setGminders() {
    // .then is critical to wait first for promise resolve before setting state
    Gminder.getGminders().then(gminders => {
      this.setState({
        gminders: gminders
      })
    })
  }

  handleChange(event) {
    this.setState({ id: event.target.value });
  }

  loadById() {
    if (Number(this.state.id)) {
      const id = Number(this.state.id);
      Gminder.getGminder(id).then(gminder => {
        this.setState({
          gminder:gminder
        })
      if (gminder.mainResponse) {
        this.showById();
      } else {
        alert('ID not in database');
        this.setState({
          byId: false
        })
      }
      })
    } else {
      alert('Enter a number')
    }
  }

  handleCreateChange(event) {
    this.setState({ create: event.target.value })
  }

  handleCreateClick() {
    console.log(this.state.create);
    Gminder.createGminder(this.state.create);
  }

  handleDeleteChange(event) {
    this.setState({
      idToDelete: event.target.value
    })
  }

  handleDeleteClick() {
    if (this.state.idToDelete) {
      Gminder.deleteGminder(this.state.idToDelete);

    } else {
      alert("Enter ID of gminder to delete");
    }
  }

  showResults() {
    this.setState({
      results: true,
      byId: false
    })
  }

  showById() {
    this.setState({
      results: false,
      byId: true
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">gmindertest</h1>
        </header>

        <p className="App-intro">
          The purpose of this app is to test hook up with backend API.
        </p>

        <button onClick={this.showResults}>Load Gminder List</button> YES
        <br /><br />

        <input onChange={this.handleChange}/>
        <button onClick={this.loadById}>Load by ID</button> YES
        <br /> <br />

        <input onChange={this.handleCreateChange}/>
        <button onClick={this.handleCreateClick}>Create</button> NO
        <br /> <br />

        <input onChange={this.handleDeleteChange}/>
        <button onClick={this.handleDeleteClick}>Delete</button> NO
        <br /> <br />

        {this.state.results ? <Results
          gminders={this.state.gminders}
          /> : null}
        {this.state.byId ? <ById
            gminder={this.state.gminder}
            /> : null}
        </div>
    );
  }
}

export default App;
