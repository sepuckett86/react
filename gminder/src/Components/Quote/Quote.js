import React from 'react';
import './Quote.css';

class Quote extends React.Component {
  render() {
    return(
      <div>
        <div id="quote">
          <p className="alignR">Added {this.props.gminder.date} from Quote Collection: {this.props.gminder.collection}</p>

  			<div className="media answer">
  			<i className="fas fa-quote-left"></i>
  			<div className="media-body">

  			<br />

  			<h4 className="lato" id="quote-random_0">
  				May your beer be laid under an enchantment of surpassing excellence for seven years!</h4><p className="lato" id="quote-who-source-author">-- Gandalf, from <i>The Fellowship of the Ring</i> by J.R.R. Tolkien</p>
  				<br />
  			</div>

  			<i className="fas fa-quote-right"></i>
  			</div>
  			<br />

  			<div className="media reason">
  			<i className="fas fa-lightbulb"></i>

  			<div className="media-body lato" id="quote-reason">
  		Will and I were reading Tolkien out loud and this was the best line in the entire book.
  			</div>
  				</div>

  			</div>
      </div>
    )
  }
}

export default Quote;
