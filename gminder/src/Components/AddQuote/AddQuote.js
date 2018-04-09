import React from 'react';

class AddQuote extends React.Component {
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
          <a className="nav-link" id="prompt-tab" onClick={this.handleClick} data-toggle="tab" href="#prompt" role="tab" aria-controls="home" aria-selected="true">Prompt</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" id="quote-tab" onClick={this.handleClick} data-toggle="tab" href="#quote" role="tab" aria-controls="quote" aria-selected="false">Quote</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="custom-tab" onClick={this.handleClick} data-toggle="tab" href="#custom" role="tab" aria-controls="custom" aria-selected="false">Custom</a>
        </li>
      </ul>

          <br />

          <form>
              <div className="form-group">
                  <label>Quote</label>
                  <textarea className="form-control" rows="3" placeholder="Example: May your beer be laid under an enchantment of surpassing excellence for seven years!"></textarea>
                  <br />
                  <div className="form-group">
                      <label >Author</label>
                      <input type="text" className="form-control" id="quote-author" placeholder="Example: J. R. R. Tolkien"/>
                  </div>
                  <br />
                  <label>Reason</label>
                  <textarea className="form-control" id="quote-reason" rows="3" placeholder="Example: When I was reading this out loud with my husband, we laughed like hyenas"></textarea>
                  <br />
                  <div className="form-group">
                      <label>Collection</label>
                      <input type="text" className="form-control" id="quote-category" placeholder="Example: Funny"/>
                  </div>
              </div>
              <br />
              <button id="btn-quote-submit" type="submit" className="btn btn-primary">Submit</button>
          </form>
      </div>

    )
  }
}

export default AddQuote;
