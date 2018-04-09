import React from 'react';

class AddCustom extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.id === "prompt-tab") {
      this.props.changeType('prompt');
    }
    if (event.target.id === "quote-tab") {
      this.props.changeType('quote');
    }
    if (event.target.id === "custom-tab") {
      this.props.changeType('custom');
    }

  }

  render() {
    return(
      <div>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a className="nav-link" id="prompt-tab" onClick={this.handleClick} href="#prompt" data-toggle="tab" role="tab" aria-controls="home" aria-selected="true">Prompt</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="quote-tab" onClick={this.handleClick}  href="#quote" data-toggle="tab" role="tab" aria-controls="quote" aria-selected="false">Quote</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" id="custom-tab" onClick={this.handleClick} href="#custom" data-toggle="tab" role="tab" aria-controls="custom" aria-selected="false">Custom</a>
        </li>
      </ul>

          <form>
              <div className="form-group">
                  <br />
                  <label>Enter Anything</label>
                  <textarea className="form-control" id="customText" rows="3"></textarea>
                  <br />
                  <div className="form-group">
                      <label>Collection</label>
                      <input type="text" className="form-control" id="custom-category" placeholder="Example: Affirmations"/>
                  </div>
              </div>
              <button id="btn-custom-submit" type="submit" className="btn btn-primary">Submit</button>
          </form>
      </div>

    )
  }
}

export default AddCustom;
