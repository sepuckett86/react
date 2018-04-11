import React from 'react';
import './Custom.css';
import Stars from '../Stars/Stars';

class Custom extends React.Component {
  render() {
    return(
      <div id="custom">

        <div className="row">
          <div className="col">
            <Stars
              starFun={this.props.starFun}
              gminder={this.props.gminder}
              />
          </div>
          <div className="col alignR">
            <p>Added {this.props.gminder.date} from Custom Collection: {this.props.gminder.collection}</p>
          </div>
        </div>

      <div className="media answer">
      <div className="media-body">
      <br />
      <h4 className="lato" id="quote-random_0">
        Breathe! Drink water. Smile at your thoughts.</h4>
        <br />
      </div>
      </div>
      </div>

    )
  }
}

export default Custom;
