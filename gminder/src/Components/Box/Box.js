import React from 'react';
import './Box.css';
import Prompt from '../Prompt/Prompt'

import Button from '../Button/Button'

class Box extends React.Component {
  render() {
    return(
      <div>
      <div className="box">
  			<Prompt
          gminders={this.props.gminders}
          />
      </div>
      <div className="row">
        <div className="col">
          <Button
            name="Next"
            onClick={this.props.nextClick}
            />
          <br />
        </div>

        <div className="col">
          <Button
            name="Add"
            onClick={this.props.addClick}
            />
          <br />
        </div>

        <div className="col">
          <Button
            name="More"
            onClick={this.props.moreClick}
            />
        </div>
      </div>


      </div>
    );
  }
}

export default Box;
