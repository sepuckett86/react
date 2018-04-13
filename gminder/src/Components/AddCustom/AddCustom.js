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
