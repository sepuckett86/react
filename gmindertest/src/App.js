import React, {Component} from 'react';
import './App.css';
import Gminder from './util/Gminder';
import Prompt from './util/Prompt';
import Prompts from './components/Prompts';
import Results from './components/Results';
import ById from './components/ById';
import BySearch from './components/BySearch';

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
      idToDelete: null,
      idToUpdate: null,
      update: '',
      bySearch: false,
      search: '',
      searchResults: [],
      prompts: false,
      promptArray: [],
    }

    this.setGminders = this.setGminders.bind(this);
    this.setPrompts = this.setPrompts.bind(this);
    this.showResults = this.showResults.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.showById = this.showById.bind(this);
    this.loadById = this.loadById.bind(this);
    this.showBySearch = this.showBySearch.bind(this);
    this.showByPrompts = this.showByPrompts.bind(this);
    this.handleCreateChange = this.handleCreateChange.bind(this);
    this.handleCreateClick = this.handleCreateClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleDeleteChange = this.handleDeleteChange.bind(this);
    this.handleUpdateChange = this.handleUpdateChange.bind(this);
    this.handleUpdateIDChange = this.handleUpdateIDChange.bind(this);
    this.handleUpdateClick = this.handleUpdateClick.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  componentWillMount() {
    this.setGminders();
    this.setPrompts();
  }

  setGminders() {
    // .then is critical to wait first for promise resolve before setting state
    Gminder.getGminders().then(gminders => {
      this.setState({gminders: gminders})
    })
  }

  setPrompts() {
    Prompt.getPrompts().then(prompts => {
      this.setState({promptArray: prompts})
    })
  }

  handleChange(event) {
    this.setState({id: event.target.value});
  }

  loadById() {
    if (Number(this.state.id)) {
      const id = Number(this.state.id);
      Gminder.getGminder(id).then(gminder => {
        this.setState({gminder: gminder})
        if (gminder.mainResponse) {
          this.showById();
        } else {
          alert('ID not in database');
          this.setState({byId: false})
        }
      })
    } else {
      alert('Enter a number')
    }
  }

  handleCreateChange(event) {
    this.setState({create: event.target.value})
  }

  handleCreateClick() {
    console.log(this.state.create);
    Gminder.createGminder(this.state.create);
  }

  handleDeleteChange(event) {
    this.setState({idToDelete: event.target.value})
  }

  handleDeleteClick() {
    if (this.state.idToDelete) {
      Gminder.deleteGminder(this.state.idToDelete);

    } else {
      alert("Enter ID of gminder to delete");
    }
  }

  handleUpdateChange(event) {
    this.setState({update: event.target.value})
  }

  handleUpdateIDChange(event) {
    this.setState({idToUpdate: event.target.value})
  }

  handleUpdateClick() {
    if (this.state.idToUpdate && this.state.update) {
      Gminder.updateGminder(this.state.idToUpdate, this.state.update)
    } else {
      alert('Something wrong with input. Enter ID number and update text.')
    }
  }

  handleSearchChange(event) {
    this.setState({search: event.target.value})
  }

  handleSearchClick() {
    if (this.state.search) {
      Gminder.searchGminders(this.state.search).then(searchResults => {
        this.setState({
          searchResults: searchResults
        });
        this.showBySearch();
      })
    } else {
      alert('Enter a search term');
    }
  }

  showResults() {
    this.setState({
      results: true,
      byId: false,
      bySearch: false,
      prompts: false})
  }

  showById() {
    this.setState({
      results: false, byId: true, bySearch: false, prompts: false})
  }

  showBySearch() {
    this.setState({results: false, byId: false, bySearch: true, prompts: false})
  }

  showByPrompts() {
    this.setState({
      results: false,
      byId: false,
      bySearch: false,
      prompts: true })
  }

  render() {
    return (<div className="App">
      <header className="App-header">
        <h1 className="App-title">gmindertest</h1>
      </header>

      <p className="App-intro">
        The purpose of this app is to test hook up with backend API.
      </p>

      <button onClick={this.showResults}>Load Gminder List</button>
      YES
      <br/><br/>

      <button onClick={this.showByPrompts}>Load Prompt List</button>
      YES
      <br/><br/>

      <input onChange={this.handleChange}/>
      <button onClick={this.loadById}>Load by ID</button>
      YES
      <br/>
      <br/>

      <input onChange={this.handleCreateChange}/>
      <button onClick={this.handleCreateClick}>Create</button>
      NO
      <br/>
      <br/>

      <input onChange={this.handleDeleteChange}/>
      <button onClick={this.handleDeleteClick}>Delete</button>
      NO
      <br/>
      <br/>

      <input onChange={this.handleUpdateIDChange} placeholder="ID here"/>
      <input onChange={this.handleUpdateChange} placeholder="Update text here"/>
      <button onClick={this.handleUpdateClick}>Update</button>
      NO
      <br/>
      <br/>

      <input onChange={this.handleSearchChange}/>
      <button onClick={this.handleSearchClick}>Search</button>
      YES (kind of)
      <br/>
      <br/>

      {
        this.state.results
          ? <Results gminders={this.state.gminders}/>
          : null
      }
      {
        this.state.byId
          ? <ById gminder={this.state.gminder}/>
          : null
      }
      {
        this.state.bySearch
          ? <BySearch searchResults={this.state.searchResults}/>
          : null
      }
      {
        this.state.prompts
          ? <Prompts prompts={this.state.promptArray}/>
          : null
      }
    </div>);
  }
}

export default App;
