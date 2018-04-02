import React from 'react';
import './Custom.css';

class Custom extends React.Component {
  render() {
    return(<div>
      <div id="custom">
      <p className="alignR">Added {this.props.gminder.date} from Custom Collection: {this.props.gminder.collection}</p>
      <div class="media answer">
      <div class="media-body">

      <br />

      <h4 class="lato" id="quote-random_0">
        Breathe! Drink water. Smile at your thoughts.</h4>
        <br />
      </div>

      </div>
      <br />

      </div>

    </div>)
  }
}

export default Custom;
