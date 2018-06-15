import React from 'react';

// Utils
import Gminder from '../../../../../../Utils/Gminder'

class AddPrompt extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prompt: 'empty',
      inputAnswer: '',
      inputReason: '',
      prompts: [],
      random: 'no'
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.changePrompt = this.changePrompt.bind(this);
    this.changePromptSame = this.changePromptSame.bind(this);
    this.newGm = this.newGm.bind(this);
  }

  componentWillMount() {
    // Get data from database
      Gminder.getPrompts().then(res => this.setState({prompts: res.express})).catch(err =>
        console.log(err)).then(() => {
        // Check if there is data in prompts
        if (this.state.prompts.length !== 0) {
          let random = this.state.prompts[Math.floor(Math.random() * this.state.prompts.length)];
          this.setState({ prompt: random });
        } else if (this.state.random === "no") {
          this.setState({ prompt: this.props.prompt})
        }
      });
  }


  changePrompt() {
    let random = this.state.prompts[Math.floor(Math.random() * this.state.prompts.length)];
    this.setState({ prompt: random });
  }

  changePromptSame() {
    let collectionArray = [];
    this.state.prompts.forEach(prompt => {
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
    if (event.target.id === "collection") {
      this.props.setCollection(this.state.prompt.collection);
      this.props.changeDisplay('manager');
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
              <h4 className="lato">{this.state.prompt.promptText}</h4>
            </div>

            </div>
            <br />
            <p className="paragraph-prompt" id={this.state.prompt.id}>From Prompt Collection: </p><button id="collection" className="btn btn-add" onClick={this.handleClick}>{this.state.prompt.collection}</button>
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
