import React from 'react';

class AddCustom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputAnswer : "",
      inputCollection : ""
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.newGm = this.newGm.bind(this);
  }

  getDate() {
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    const fullDate = `${month}/${day}/${year}`;
    return fullDate;
  }

  generateId() {
    return `${ new Date().getTime() }`;
  }


  newGm() {
    const date = this.getDate();
    const id = this.generateId();
    const newG = {
      id: id,
      category: 'custom',
      collection: this.state.inputCollection,
      date: date,
      prompt: null,
      answer: this.state.inputAnswer,
      reason: null,
      author: null,
      stars: '0'
    }
    this.props.newGminder(newG);
  }

  handleClick(event) {
    if (event.target.id === "temp-submit") {
      this.newGm();
      this.props.boxClick();
    }

  }

  handleChange(event) {
    if (event.target.id === "custom-answer") {
      this.setState({inputAnswer: event.target.value});
    }
    if (event.target.id === "custom-collection") {
      this.setState({inputCollection: event.target.value});
    }
  }

  render() {
    return(
      <div>
          <form>
              <div className="form-group">
                  <br />
                  <label>Enter Anything</label>
                  <textarea className="form-control" value={this.state.inputAnswer} onChange={this.handleChange} id="custom-answer" rows="3"></textarea>
                  <br />
                  <div className="form-group">
                      <label>Collection</label>
                      <input type="text" className="form-control" value={this.state.inputCollection} onChange={this.handleChange} id="custom-collection" placeholder="Example: Affirmations"/>
                  </div>
              </div>
          </form>
          <button id="temp-submit" className="btn btn-add" onClick={this.handleClick}>Save</button>
      </div>

    )
  }
}

export default AddCustom;
