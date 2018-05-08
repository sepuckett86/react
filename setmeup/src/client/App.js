import React, {Component} from 'react';
import './App.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class App extends Component {
  render() {
    return (<div className="App">
      <header className="App-header">
        <h1 className="App-title">setmeup</h1>
      </header>
      {/* Navbar requires imports from react-bootstrap */}
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">setmeup</a>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">
              Link
            </NavItem>
            <NavItem eventKey={2} href="#">
              Link
            </NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider="divider"/>
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* End Navbar */}
      <p className="App-intro">
        This is my ideal setup for a new app.
      </p>
    </div>);
  }
}

export default App;
