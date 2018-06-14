import React from 'react';
import './Prompt.css';
import Stars from '../Stars/Stars';


class Prompt extends React.Component {
  render() {
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
                <p className="lato">{this.props.prompt}</p>
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
              <p className="lato">{this.props.gminder.prompt}</p>
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
