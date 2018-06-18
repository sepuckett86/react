import React from 'react';
import './Prompt.css';
import Stars from '../../../../Components/Stars/Stars';
import MediaQuery from 'react-responsive';

class Prompt extends React.Component {
  getPromptWithId() {
    for (let i = 0; i < this.props.prompts.length; i++) {
      if (this.props.prompts[i].id === this.props.gminder.promptID) {
        return this.props.prompts[i].promptText;
      }
    }
  }

  render() {
    const prompt = this.getPromptWithId();

    return(
      <div id="prompt">

        {/* MediaQuery for large screen */}
          <MediaQuery query="(min-width: 576px)">
            <div className="row">
              <div className="col alignL">
                <Stars
                  gminder={this.props.gminder}
                  />
              </div>
            <div className="col alignR">
              <p>Added {this.props.gminder.recordedDate} from Prompt Collection: {this.props.gminder.collection}</p>
            </div>
            </div>
          </MediaQuery>

            <div className="media prompt">
              <div className="media-body">
                <p className="lato">{prompt}</p>
              </div>
            </div>
            <br />

            <div className="media answer">
            <div className="media-body">
            <br />
            <h4 className="lato">{this.props.gminder.mainResponse}</h4><br />
            </div>
            </div>

            { this.props.gminder.reason ?
              <div>
            <br />
            <div className="media reason">
            <div className="media-body lato">
            {this.props.gminder.reason}
            </div>
            </div>
          </div>
            : null}

            <br />
       {/* MediaQuery for small screen */}
       <MediaQuery query="(max-width: 576px)">

          <Stars
            starFun={this.props.starFun}
            gminder={this.props.gminder}
            />
          <br />
            <p>{this.props.gminder.recordedDate ? (this.props.gminder.recordedDate + ' | '): null}
               {this.props.gminder.collection}</p>
       </MediaQuery>


    </div>
  )
  }
}

export default Prompt;
