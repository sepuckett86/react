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
    this.changePrompt = this.changePrompt.bind(this);
    this.changePromptSame = this.changePromptSame.bind(this);
    this.newGm = this.newGm.bind(this);
  }

  componentWillMount() {
    if (this.props.random === "yes") {
    let random = this.props.prompts[Math.floor(Math.random() * this.props.prompts.length)];
    this.setState({ prompt: random });
  } else if (this.props.random === "no") {
    this.setState({ prompt: this.props.prompt})
  }
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

  render() {
    return(
      <div>
          <br />
          <div className="media answer media-small">
            <div className="media-body">
              <h4 className="lato">{this.state.prompt.prompt}</h4>
            </div>

            </div>
            <br />
            <p className="paragraph-prompt" id={this.state.prompt.id}>From Prompt Collection: {this.state.prompt.collection}</p>
            <p>Next prompt from:
             <button id="next-prompt-same" className="btn btn-add" onClick={this.handleClick}>Same collection</button>
             <button id="next-prompt-all" className="btn btn-add" onClick={this.handleClick}>All collections</button>
            </p>
              <br />


          <form>
                <div className="form-group">
                  <label>Answer</label>
                  <textarea className="form-control" value={this.state.inputAnswer} onChange={this.handleChange} id="prompt-answer" rows="3"></textarea>
                  <br />
                  <label>Reason</label>
                  <textarea className="form-control" value={this.state.inputReason} onChange={this.handleChange} id="prompt-reason" rows="3"></textarea>
                  <br />

              </div>

          </form>
          <button className="btn btn-add" id="temp-submit" onClick={this.handleClick}>Save</button>

      </div>
    )
  }
}

export default AddPrompt;
