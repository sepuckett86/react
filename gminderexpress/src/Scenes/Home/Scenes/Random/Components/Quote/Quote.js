import React from 'react';
import './Quote.css';
import Stars from '../../../../Components/Stars/Stars';
import MediaQuery from 'react-responsive';

class Quote extends React.Component {
  render() {
    return(
        <div id="quote">

          {/* MediaQuery for large screen */}
            <MediaQuery query="(min-width: 576px)">
            <div className="row">
              <div className="col alignL">
                <Stars
                  gminder={this.props.gminder}
                  />
              </div>
              <div className="col alignR">
                <p>Added {this.props.gminder.recordedDate} from Quote Collection: {this.props.gminder.collection}</p>
              </div>
            </div>
            </MediaQuery>

      			<div className="media answer">
      			<div className="media-body">
      			<br />
      			<h4 className="lato alignL" id="quote-random_0">
      				"{this.props.gminder.mainResponse}"</h4>
              <p className="lato alignR" id="quote-who-source-author">--
                {this.props.gminder.who ? this.props.gminder.who : null}
                {this.props.gminder.who ? ", " : null}
                {this.props.gminder.source ? "from " : null}
                {this.props.gminder.source ? this.props.gminder.source : null}
                {this.props.gminder.author ? " by " : null}
                {this.props.gminder.author}</p>
      				<br />
      			</div>
      			</div>
      			<br />
            {/* Determine if there is reason content */}
            { this.props.gminder.reason !== null ?
              (<div className="media reason">
              <div className="media-body lato" id="quote-reason">
                {this.props.gminder.reason}
              </div>
            </div>)
              : null }

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

export default Quote;
