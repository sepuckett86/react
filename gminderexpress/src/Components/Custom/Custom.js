import React from 'react';
import './Custom.css';
import Stars from '../Stars/Stars';

class Custom extends React.Component {
  render() {
    return(
      <div id="custom">

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
              <p>Added {this.props.gminder.date} from Custom Collection: {this.props.gminder.collection}</p>
            </div>
          </div>

          <div className="media answer">
          <div className="media-body">
          <br />
          <h4 className="lato" id="quote-random_0">
            {this.props.gminder.answer}</h4>
            <br />
          </div>
          </div>

        </div>


        {/* For small screen */}
         <div className="d-sm-none">
           <div className="row">
             <div className="col">

             </div>
             <div className="col alignR">

             </div>
           </div>

           <div className="media answer media-small">
           <div className="media-body">
           <br />
           <h4 className="lato" id="quote-random_0">
             {this.props.gminder.answer}</h4>
             <br />
           </div>
           </div>
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

export default Custom;
