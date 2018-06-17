// Note: modal cannot be inside responsive design display or it will not work for all screen sizes

import React from 'react';
import './Add.css';
import Button from '../../Components/Button/Button';
import AddCustom from './Components/AddCustom/AddCustom';
import AddPrompt from './Components/AddPrompt/AddPrompt';
import AddQuote from './Components/AddQuote/AddQuote';

// Utils
import Gminder from '../../../../Utils/Gminder'

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'empty',
      gminderForDatabase: {}
    }

    this.changeType = this.changeType.bind(this);
    this.setGminderforDatabase = this.setGminderforDatabase.bind(this);
    this.changeDatabase = this.changeDatabase.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }



  handleClick(event) {
    if (event.target.id === "prompt-tab") {
      this.changeType('prompt');
    }
    if (event.target.id === "quote-tab") {
      this.changeType('quote');
    }
    if (event.target.id === "custom-tab") {
      this.changeType('custom');
    }
  }

  changeDatabase() {
    Gminder.addGminder(this.state.gminderForDatabase);
  }

  setGminderforDatabase(gminder) {
    this.setState({gminderForDatabase: gminder})
  }

  chooseType() {
    if(this.state.type === 'empty') {
      return(<div>
        <ul className="nav nav-pills nav-justified" id="myTab" role="tablist">
        <li className="nav-item">
          <a className="nav-link btn-add" id="prompt-tab" onClick={this.handleClick} href="#prompt" data-toggle="tab" role="tab" aria-controls="home" aria-selected="true">Prompt</a>
        </li>
        <li className="nav-item">
          <a className="nav-link btn-add" id="quote-tab" onClick={this.handleClick} href="#quote" data-toggle="tab" role="tab" aria-controls="quote" aria-selected="false">Quote</a>
        </li>
        <li className="nav-item">
          <a className="nav-link btn-add" id="custom-tab" onClick={this.handleClick} href="#custom" data-toggle="tab" role="tab" aria-controls="custom" aria-selected="false">Custom</a>
        </li>
      </ul>
      </div>)
    }
    if(this.state.type === 'prompt') {
      return(<div>
        <ul className="nav nav-pills nav-justified" id="myTab" role="tablist">
        <li className="nav-item">
          <a className="nav-link btn-add-active" id="prompt-tab" onClick={this.handleClick} data-toggle="modal" href="#prompt">Prompt</a>
        </li>
        <li className="nav-item">
          <a className="nav-link btn-add" id="quote-tab" onClick={this.handleClick} href="#quote" data-toggle="tab" role="tab" aria-controls="quote" aria-selected="false">Quote</a>
        </li>
        <li className="nav-item">
          <a className="nav-link btn-add" id="custom-tab" onClick={this.handleClick} href="#custom" data-toggle="tab" role="tab" aria-controls="custom" aria-selected="false">Custom</a>
        </li>
      </ul>
        <AddPrompt
              changeType={this.changeType}
              changeDisplay={this.props.changeDisplay}
              prompts={this.props.prompts}
              randomClick={this.props.randomClick}
              setPrompt={this.props.setPrompt}
              setCollection={this.props.setCollection}
              setGminderForDatabase={this.setGminderforDatabase}
              random="yes" />
            </div>)
    }
    if(this.state.type === 'quote') {
      return(<div>
        <ul className="nav nav-pills nav-justified" id="myTab" role="tablist">
        <li className="nav-item">
          <a className="nav-link btn-add" id="prompt-tab" onClick={this.handleClick} href="#prompt" data-toggle="tab" role="tab" aria-controls="home" aria-selected="true">Prompt</a>
        </li>
        <li className="nav-item">
          <a className="nav-link btn-add-active" id="quote-tab" onClick={this.handleClick} href="#quote" data-toggle="modal" role="tab" aria-controls="quote" aria-selected="false">Quote</a>
        </li>
        <li className="nav-item">
          <a className="nav-link btn-add" id="custom-tab" onClick={this.handleClick} href="#custom" data-toggle="tab" role="tab" aria-controls="custom" aria-selected="false">Custom</a>
        </li>
      </ul>
      <AddQuote
              changeType={this.changeType}
              randomClick={this.props.randomClick} />
            </div>)
    }
    if(this.state.type === 'custom') {
      return(<div>
        <ul className="nav nav-pills nav-justified" id="myTab" role="tablist">
        <li className="nav-item">
          <a className="nav-link btn-add" id="prompt-tab" onClick={this.handleClick} href="#prompt" data-toggle="tab" role="tab" aria-controls="home" aria-selected="true">Prompt</a>
        </li>
        <li className="nav-item">
          <a className="nav-link btn-add" id="quote-tab" onClick={this.handleClick} href="#quote" data-toggle="tab" role="tab" aria-controls="quote" aria-selected="false">Quote</a>
        </li>
        <li className="nav-item">
          <a className="nav-link btn-add-active" id="custom-tab" onClick={this.handleClick} href="#custom" data-toggle="modal" role="tab" aria-controls="custom" aria-selected="false">Custom</a>
        </li>
      </ul>
          <AddCustom
              changeType={this.changeType}
              randomClick={this.props.randomClick}   />
        </div>)
    }
  }

  changeType(type) {
    if(type === 'prompt'){
      this.setState({
        type: 'prompt'
      })
    }
    if(type === 'quote'){
      this.setState({
        type: 'quote'
      })
    }
    if(type === 'custom'){
      this.setState({
        type: 'custom'
      })
    }
  }
  render() {
    return(
      <div className="container">
        {console.log(this.state.gminderForDatabase)}
        {/* Modal - Must be outside of responsive design displays */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Create Goodminder</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                Make permanent change to database?
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.changeDatabase}>Confirm</button>
              </div>
            </div>
          </div>
        </div>

        {/* For small screen (phone) */}
        <div className="d-sm-none d-block">
    	         <p>Choose an entry type</p>
               <div className="alignL">
               {this.chooseType()}
               </div>

         <br />
         <div className="row">
           <div className="col">
        <Button
          name="Back"
          onClick={this.props.changeDisplay}
          />
        <br />
      </div>
      <br />
    </div>
    <br />
        </div>


          {/* For large screen */}
        <div className="d-none d-sm-block">
          <br />

          <div className="box">
    	         <p>Choose an entry type</p>
               {this.chooseType()}
          </div>

         <br />
         <div className="row">
           <div className="col">
        <Button
          id='random'
          name="Back"
          onClick={this.props.changeDisplay}
          />
        <br />
      </div>
      <br />
    </div>
    <br />
        </div>





  </div>
  )
  }
}

export default Add;
