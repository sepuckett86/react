import React from 'react';
import './Prompt.css';
import Stars from '../../../../Components/Stars/Stars';

class Prompt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prompt: ""
    }

    this.componentWillMount = this.componentWillMount.bind(this);
  }

  componentWillMount() {
    let prompt = this.getPromptWithId();
    this.setState({prompt: prompt})
  }

  getPromptWithId() {
    for (let i = 0; i < this.props.prompts.length; i++) {
      if (this.props.prompts[i].id === this.props.gminder.promptID) {
        return this.props.prompts[i].promptText;
      }
    }
  }


  render() {
    const prompt = this.state.prompt;
    return(
      <div id="prompt">
        {/* For large screen */}
        <div className="d-none d-sm-block">
            <div className="row">
              <div className="col">
                <Stars
                  starFun={this.props.starFun}
                  gminder={this.props.gminder}
                  />
              </div>
            <div className="col alignR">
              <p>Added {this.props.gminder.recordedDate} from Prompt Collection: {this.props.gminder.collection}</p>
            </div>
            </div>

            <div className="media prompt">
              <div className="media-body">
                <p className="lato">{this.state.prompt}</p>
              </div>
            </div>
            <br />

            <div className="media answer">
            <div className="media-body">
            <br />
            <h4 className="lato">{this.props.gminder.mainResponse}</h4><br />
            </div>
            </div>
            <br />

            <div className="media reason">
            <div className="media-body lato">
            {this.props.gminder.reason}
            </div>
            </div>

        </div>


       {/* For small screen */}
        <div className="d-sm-none">


          <div className="media prompt media-small">
            <div className="media-body">
              <p className="lato">{prompt}</p>
            </div>
          </div>
          <br />

          <div className="media answer media-small">
          <div className="media-body">
          <br />
          <h4 className="lato">{this.props.gminder.mainResponse}</h4><br />
          </div>
          </div>
          <br />

          <div className="media reason media-small">
          <div className="media-body lato">
          {this.props.gminder.reason}
          </div>
          </div>

          <br />
          <Stars
            starFun={this.props.starFun}
            gminder={this.props.gminder}
            />
          <br />
            <p>{this.props.gminder.date} | {this.props.gminder.collection}</p>

        </div>
    </div>
  )
  }
}

export default Prompt;
