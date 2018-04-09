import React from 'react';
import './Quote.css';
import Stars from '../Stars/Stars';

class Quote extends React.Component {
  render() {
    return(
      <div>
        <div id="quote">
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
  				{this.props.gminder.answer}</h4><p className="lato" id="quote-who-source-author">--{this.props.gminder.author}</p>
  				<br />
  			</div>


  			</div>
  			<br />

  			<div className="media reason">


  			<div className="media-body lato" id="quote-reason">
  		{this.props.gminder.reason}
  			</div>
  				</div>

  			</div>
      </div>
    )
  }
}

export default Quote;
