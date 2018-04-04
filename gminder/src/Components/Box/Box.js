import React from 'react';
import './Box.css';

import Prompt from '../Prompt/Prompt';
import Quote from '../Quote/Quote';
import Custom from '../Custom/Custom';
import Button from '../Button/Button';

class Box extends React.Component {
  chooseDisplay() {
    let gminder = this.props.display;
    if(gminder.category === 'prompt') {
      return <Prompt
        gminder={gminder}
        />
    }
    if(gminder.category === 'quote') {
      return <Quote
        gminder={gminder}
        />
    }
    if(gminder.category === 'custom') {
      return <Custom
        gminder={gminder}
        />
    } else {
      return <p>Category Error</p>
    }
  }


  render() {
    return(
      <div>
      <div className="box">
  			{this.chooseDisplay()}
      </div>
      <br />
      <div className="row">
        <div className="col">
          <Button
            name="Next"
            onClick={this.props.nextClick}
            />
          <br />
        </div>
        <br />
        <div className="col">
          <Button
            name="Add"
            onClick={this.props.addClick}
            />
          <br />
        </div>
        <br />
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
