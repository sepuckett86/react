import React from 'react';

class AddPrompt extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prompt: 'empty',
      inputAnswer: '',
      inputReason: ''
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changePrompt = this.changePrompt.bind(this);
    this.changePromptSame = this.changePromptSame.bind(this);
    this.newGm = this.newGm.bind(this);
  }

  componentWillMount() {
    let random = this.props.prompts[Math.floor(Math.random() * this.props.prompts.length)];
    this.setState({ prompt: random });
  }

  changePrompt() {
    let random = this.props.prompts[Math.floor(Math.random() * this.props.prompts.length)];
    this.setState({ prompt: random });
  }

  changePromptSame() {
    let collectionArray = [];
    this.props.prompts.forEach(prompt => {
      if (prompt.collection === this.state.prompt.collection) {
        collectionArray.push(prompt);
      }
    })
    let random = collectionArray[Math.floor(Math.random() * collectionArray.length)];
    this.setState({ prompt: random });
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
    if (event.target.id === "next-prompt-all") {
      this.changePrompt();
    }
    if (event.target.id === "next-prompt-same") {
      this.changePromptSame();
    }
    if (event.target.id === "temp-submit") {
      this.newGm();
      this.props.boxClick();
    }
  }

  handleChange(event) {
    if (event.target.id === "prompt-answer") {
      this.setState({inputAnswer: event.target.value});
    }
    if (event.target.id === "prompt-reason") {
      this.setState({inputReason: event.target.value});
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
      category: 'prompt',
      collection: 'Favorites',
      date: date,
      prompt: this.state.prompt.prompt,
      answer: this.state.inputAnswer,
      reason: this.state.inputReason,
      author: null,
      stars: '0'
    }
    this.props.newGminder(newG);
  }

  handleSubmit(event) {
    const newGminder = {
      id: '7',
      category: 'prompt',
      collection: 'Favorites',
      date: "1-2-3",
      prompt: this.state.prompt.prompt,
      answer: this.state.inputAnswer,
      reason: this.state.inputReason,
      author: null,
      stars: '4'
    }
    this.props.newGminder(newGminder);
    alert(JSON.stringify(newGminder));
    alert(this.state.inputAnswer);
    console.log();
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
                  <p className="paragraph-prompt" id={this.state.prompt.id}>From Prompt Collection: {this.state.prompt.collection}</p>
                  <h4 className="lato">{this.state.prompt.prompt}</h4>
                  <br />
                  <p>Next prompt from:
                   <button id="next-prompt-same" onClick={this.handleClick}>Same collection</button>|
                   <button id="next-prompt-all" onClick={this.handleClick}>All collections</button>|
                  </p>

          <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Answer</label>
                  <textarea className="form-control" value={this.state.inputAnswer} onChange={this.handleChange} id="prompt-answer" rows="3"></textarea>
                  <br />
                  <label>Reason</label>
                  <textarea className="form-control" value={this.state.inputReason} onChange={this.handleChange} id="prompt-reason" rows="3"></textarea>
                  <br />

              </div>

          </form>
          <button id="temp-submit" onClick={this.handleClick}>Add to gminders</button>
      </div>
    )
  }
}

export default AddPrompt;
