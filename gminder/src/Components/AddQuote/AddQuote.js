import React from 'react';

class AddQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputAnswer: '',
      inputReason: '',
      inputAuthor: '',
      inputCollection: ''

    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(event) {
    if (event.target.id === "btn-quote-submit") {
      this.newGm();
      this.props.boxClick();
    }
  }

  handleChange(event) {
    if (event.target.id === "quote-answer") {
      this.setState({inputAnswer: event.target.value});
    }
    if (event.target.id === "quote-reason") {
      this.setState({inputReason: event.target.value});
    }
    if (event.target.id === "quote-author") {
      this.setState({inputAuthor: event.target.value});
    }
    if (event.target.id === "quote-collection") {
      this.setState({inputCollection: event.target.value});
    }

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
      category: 'quote',
      collection: this.state.inputCollection,
      date: date,
      prompt: null,
      answer: this.state.inputAnswer,
      reason: this.state.inputReason,
      author: this.state.inputAuthor,
      stars: '0'
    }
    this.props.newGminder(newG);
  }

  render() {
    return(
      <div>
          <br />
          <form>
              <div className="form-group">
                  <label>Quote</label>
                  <textarea id="quote-answer" value={this.state.inputAnswer} onChange={this.handleChange} className="form-control" rows="3" placeholder="Example: May your beer be laid under an enchantment of surpassing excellence for seven years!"></textarea>
                  <br />
                  <div className="form-group">
                      <label>Author</label>
                      <input type="text" value={this.state.inputAuthor} onChange={this.handleChange} className="form-control" id="quote-author" placeholder="Example: Gandalf, from LOTR by J. R. R. Tolkien"/>
                  </div>
                  <br />
                  <label>Reason</label>
                  <textarea className="form-control" value={this.state.inputReason} onChange={this.handleChange} id="quote-reason" rows="3" placeholder="Example: When I was reading this out loud with my husband, we laughed like hyenas"></textarea>
                  <br />
                  <div className="form-group">
                      <label>Collection</label>
                      <input type="text" value={this.state.inputCollection} onChange={this.handleChange} className="form-control" id="quote-collection" placeholder="Example: Funny"/>
                  </div>
              </div>
              <br />

          </form>
          <button id="btn-quote-submit" className="btn btn-add" onClick={this.handleClick}>Save</button>
      </div>

    )
  }
}

export default AddQuote;
