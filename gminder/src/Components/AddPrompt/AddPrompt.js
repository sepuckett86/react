import React from 'react';

class AddPrompt extends React.Component {
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

  handleSubmit() {
    this.props.newFun();
  }

  render() {
    return(
      <div>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a className="nav-link active" id="prompt-tab" onClick={this.handleClick} href="#prompt" data-toggle="tab" role="tab" aria-controls="home" aria-selected="true">Prompt</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="quote-tab" onClick={this.handleClick} href="#quote" data-toggle="tab" role="tab" aria-controls="quote" aria-selected="false">Quote</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="custom-tab" onClick={this.handleClick} href="#custom" data-toggle="tab" role="tab" aria-controls="custom" aria-selected="false">Custom</a>
        </li>
      </ul>
      <br />

          <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                  <p className="paragraph-prompt" id="promptId_4">From Prompt Collection: Happy</p>
                  <h4 className="lato">Who is your favorite celebrity?</h4>
                  <br />
                  <p>Next prompt from:
                   Same collection|
                  All collections</p>
                  <label>Answer</label>
                  <textarea className="form-control" id="prompt-answer" rows="3"></textarea>
                  <br />
                  <label>Reason</label>
                  <textarea className="form-control" id="prompt-reason" rows="3"></textarea>
              </div>
              <button id="btn-prompt-submit" type="submit" className="btn btn-primary">Submit</button>
          </form>
      </div>
    )
  }
}

export default AddPrompt;
