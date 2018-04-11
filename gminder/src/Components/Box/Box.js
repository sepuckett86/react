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
        starFun={this.props.starFun}
        nextClick={this.props.nextClick}
        backClick={this.props.backClick}
        />
    }
    if(gminder.category === 'quote') {
      return <Quote
        gminder={gminder}
        starFun={this.props.starFun}
        />
    }
    if(gminder.category === 'custom') {
      return <Custom
        gminder={gminder}
        starFun={this.props.starFun}
        />
    } else {
      return <p>Category Error</p>
    }
  }


  render() {
    return(
      <div>

        {/*
          Responsive Design
          For small screen (phone)
        */}
        <div className="d-sm-none">
          <div className="backfill">
            <div>
            <span className="">
              <button className="clear-button" onClick={this.props.backClick}><i className="fas fa-arrow-left"></i> </button>
            </span>
            <span className="">
            <button className="clear-button" onClick={this.props.nextClick}> <i className="fas fa-arrow-right"></i></button>
            </span>
          </div>

        {/* crappy arrow buttons
            <div className="row">
              <div className="col col-6">
                <Button
                  onClick={this.props.backClick}
                  name={<i className="fas fa-chevron-left"></i>}/>
              </div>
              <div className="col col-6">
                <Button
                  onClick={this.props.nextClick}
                  name={<i className="fas fa-chevron-right"></i>}/>
              </div>
            </div>
        */}

          {this.chooseDisplay()}

          <hr />
          </div>
        <br />

          {/* Check whether there is more than one gminder stored */}
          { this.props.gms.length > 1 ?
            <div>
              <div className="row">

          <div className="col col-12 col-sm-4">
            <Button
              name="Add"
              onClick={this.props.addClick}
              />
          </div>
          <div className="col col-12 col-sm-4">
            <Button
              name="More"
              onClick={this.props.moreClick}
              />
          </div>
        </div>
        </div>
          : null
        }
        { this.props.gms.length === 1 ?
          <div>
          <div className="row">
          <div className="col col-12 col-sm-4">
            <Button
              name="Add"
              onClick={this.props.addClick}
              />
          </div>
          <div className="col col-12 col-sm-4">
            <Button
              name="More"
              onClick={this.props.moreClick}
              />
          </div>
        </div>
        </div>
          : null
        }

        </div>

        {/* For large screen */}
        <div className="d-none d-sm-block">
          <div className="box">
      			{this.chooseDisplay()}
            <div className="alignR">
              <br />
            <a href="edit.php" className="button-clear"><i className="fas fa-edit"></i></a>
            <a href="print.php" className="button-clear"><i className="fas fa-print"></i></a>
          </div>
          </div>
          <br />

          {/* Check whether there is more than one gminder stored */}
          { this.props.gms.length > 1 ?
            <div>
              <div className="row">
          <div className="col col-12 col-sm-4">
            <Button
              name="Next"
              onClick={this.props.nextClick}
              />
          </div>
          <div className="col col-12 col-sm-4">
            <Button
              name="Add"
              onClick={this.props.addClick}
              />
          </div>
          <div className="col col-12 col-sm-4">
            <Button
              name="More"
              onClick={this.props.moreClick}
              />
          </div>
        </div>
        </div>
          : null
        }
        { this.props.gms.length === 1 ?
          <div>
          <div className="row">
          <div className="col col-12 col-sm-4">
            <Button
              name="Add"
              onClick={this.props.addClick}
              />
          </div>
          <div className="col col-12 col-sm-4">
            <Button
              name="More"
              onClick={this.props.moreClick}
              />
          </div>
        </div>
        </div>
          : null
        }

        </div>

        <br />

      </div>
    );
  }
}

export default Box;
