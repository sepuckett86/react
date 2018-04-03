import React from 'react';
import './More.css';
import Button from '../Button/Button';

class More extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'list'
    };

    this.changeDisplay = this.changeDisplay.bind(this);
    this.makeGminderTable = this.makeGminderTable.bind(this);
  }

  changeDisplay(newDisplay) {
    this.setState({
      display: newDisplay
    })
  }

  makeGminderTable() {
    let gm = this.props.gms
    /*document.getElementById('gminders').innerHTML =
          gm.map(gminder => {
            return (
              <div className="row">
                <div className="col">
                  {gminder.id}
                </div>
                <div className="col">
                  {gminder.category}
                </div>
                <div className="col">
                  {gminder.answer}
                </div>
            </div>
            )
          })*/


  }

  render() {
    return(
      <div>
        <div id="gminders"></div>
        <br />

        <Button
        name="Table of All Gminders"
        onClick={this.makeGminderTable}
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
