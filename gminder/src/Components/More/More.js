import React from 'react';
import './More.css';
import Button from '../Button/Button';

import {CSVLink, CSVDownload} from 'react-csv';




class More extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'none',
      csvData: [
        ['ID', 'Stars', 'Category', 'Goodminder'] ,
        ['Ahmed', 'Tomi' , 'ah@smthing.co.com'] ,
        ['Raed', 'Labes' , 'rl@smthing.co.com'] ,
        ['Yezzi','Min l3b', 'ymin@cocococo.com']
      ]
    };

    this.changeDisplay = this.changeDisplay.bind(this);

  }

  changeDisplay(input) {

    this.setState({
      display: input
    })
    console.log(this.state.display)
  }

  generateKey(index) {
    return `${ index }_${ new Date().getTime() }`;
  }

  makeCSVArray() {
    let myArray = [['ID', 'Category', 'Collection', 'Date', 'Prompt', 'Answer', 'Reason', 'Author', 'Stars']];
    this.props.gms.forEach(gminder => {
      let innerArray = [gminder.id, gminder.category, gminder.collection, gminder.date, gminder.propmpt, gminder.answer, gminder.reason, gminder.author, gminder.stars];
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
      <div>  { this.state.display === 'gminderTable' ?
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

        <br />

        <Button
        name="Table of All Gminders"
        onClick={this.changeDisplay}
        id="gminderTable"
        gms={this.props.gms}
        />
        <br />
        <br />
        <Button
        name="Table of All Prompts"
        onClick={this.props.moreClick}
        />
        <br />
        <br />
        <Button
        name="Back"
        onClick={this.props.moreClick}
        />
      </div>)
  }
}

export default More;
