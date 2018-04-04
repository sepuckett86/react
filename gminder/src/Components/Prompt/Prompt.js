import React from 'react';
import './Prompt.css';
import Stars from '../Stars/Stars';

class Prompt extends React.Component {
  render() {
    return(
      <div id="prompt">
        <div className="row">
          <div className="col">
            <Stars />
          </div>
          <div className="col alignR">
            <p>Added {this.props.gminder.date} from Prompt Collection: {this.props.gminder.collection}</p>
          </div>
        </div>

       <div className="media prompt">
       <div className="media-body">
       <p className="lato">What is a song that made you smile in the past month?</p>
      </div>
      </div>
      <br />

      <div className="media answer">
      <div className="media-body">

      <br />
      <h4 className="lato">Legend of Kyrandia Emerald Room Song by Frank Klepacki</h4><br />

        </div>


      </div>
  <br />

      <div className="media reason">


      <div className="media-body lato">

    After wandering through endless caves in the game with repetitive
    music, the music changes for only one scene to a complex, long,
    cool song. It reminds me of all that is great about old school
    adventure games.
      </div>
        </div>
    </div>
  )
  }
}

export default Prompt;
