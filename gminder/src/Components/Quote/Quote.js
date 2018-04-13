import React from 'react';
import './Quote.css';
import Stars from '../Stars/Stars';

class Quote extends React.Component {
  render() {
    return(
        <div id="quote">

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
                <p>Added {this.props.gminder.date} from Quote Collection: {this.props.gminder.collection}</p>
              </div>
            </div>

      			<div className="media answer">
      			<div className="media-body">
      			<br />
      			<h4 className="lato" id="quote-random_0">
      				"{this.props.gminder.answer}"</h4>
              <p className="lato" id="quote-who-source-author">--{this.props.gminder.author}</p>
      				<br />
      			</div>
      			</div>
      			<br />
            {/* Determine if there is reason content */}
            { this.props.gminder.reason !== null ?
              (<div className="media reason media-small">
              <div className="media-body lato" id="quote-reason">
                {this.props.gminder.reason}
              </div>
            </div>)
              : null }
          </div>

          {/* For small screen */}
           <div className="d-sm-none">

              <div className="media answer media-small">
              <div className="media-body">
              <br />
              <h4 className="lato" id="quote-random_0">
                "{this.props.gminder.answer}"</h4>
                 <p className="lato" id="quote-who-source-author">--{this.props.gminder.author}</p>
                <br />
              </div>
              </div>
              <br />
              {/* Determine if there is reason content */}
              { this.props.gminder.reason !== null ?
                (<div className="media reason media-small">
                <div className="media-body lato" id="quote-reason">
                  {this.props.gminder.reason}
                </div>
              </div>)
                : null }

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

export default Quote;
