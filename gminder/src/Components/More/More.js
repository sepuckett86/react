import React from 'react';
import './More.css';
import Button from '../Button/Button';


//Add CSVDownload to import if want to use it
import {CSVLink} from 'react-csv';

class More extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'none',
      csvData: []
    };

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(id) {
    this.setState({
      display: id
    })
  }



  generateKey(index) {
    return `${ index }_${ new Date().getTime() }`;
  }

  makeCSVArray() {
    let myArray = [['ID', 'Category', 'Collection', 'Date', 'Prompt', 'Answer', 'Reason', 'Author', 'Stars']];
    this.props.gms.forEach(gminder => {
      let innerArray = [gminder.id, gminder.category, gminder.collection, gminder.date, gminder.prompt, gminder.answer, gminder.reason, gminder.author, gminder.stars];
      myArray.push(innerArray);
    })
    return myArray;
  }

  makeCSVArrayPrompts() {
    let myArray = [['ID', 'Collection', 'Prompt']];
    this.props.prompts.forEach(prompt => {
      let innerArray = [prompt.id, prompt.collection, prompt.prompt];
      myArray.push(innerArray);
    })
    return myArray;
  }

  shortenGminder(gminder) {
    if(gminder.length > 100){
      let short = gminder.slice(0,100);
      short = short.concat('...');
      gminder = short;
    }
    return gminder
  }

  displayAuthor(gminder) {
    if(gminder.author) {
      return (
        <div>--{gminder.author}</div>
      )
    }
  }

  render() {
    return(
      <div>
        { this.state.display === 'gminderTable' ?
      (<div className="box">
        <div id="gminders">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Stars</th>
                <th scope="col">Category</th>
                <th scope="col">Goodminder</th>

              </tr>
            </thead>
            <tbody>
          {
            this.props.gms.map((gminder, i) => {
              return (
                  <tr key={this.generateKey(i)}>
                    <th scope="row">{gminder.id}</th>
                    <td>{gminder.stars}</td>
                    <td>{gminder.category}</td>
                    <td>
                      {this.shortenGminder(gminder.answer)}
                      {this.displayAuthor(gminder)}
                    </td>
                    <td>
                    <Button
                      name="Edit" />
                    </td>
                  </tr>
              )
            })
          }

        </tbody>
        </table>
        <CSVLink data={this.makeCSVArray()} >Download CSV of all data</CSVLink>
      </div>
    </div>)
        : null }

        { this.state.display === 'promptTable' ?
        (<div className="box">
        <div id="prompts">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Collection</th>
                <th scope="col">Prompt</th>

              </tr>
            </thead>
            <tbody>
          {
            this.props.prompts.map((prompt, i) => {
              return (
                  <tr key={this.generateKey(i)}>
                    <th scope="row">{prompt.id}</th>
                    <td>{prompt.collection}</td>
                    <td>{prompt.prompt}</td>
                    <td>
                    <Button
                      name="Edit" />
                    </td>
                  </tr>
              )
            })
          }
        </tbody>
        </table>
        <CSVLink data={this.makeCSVArrayPrompts()} >Download CSV of all data</CSVLink>
        </div>
        </div>)
        : null }


        <br />

        <Button
        name="Table of All Gminders"
        onClick={this.handleClick}
        id="gminderTable"
        gms={this.props.gms}
        />
        <br />
        <br />
        <Button
        name="Table of All Prompts"
        id="promptTable"
        onClick={this.handleClick}
        />
        <br />
        <br />
        <Button
        name="Back"
        onClick={this.props.boxClick}
        />

        <br />
        <br />

      </div>)
  }
}

export default More;
