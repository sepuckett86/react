import React from 'react';
import './Add.css';
import Button from '../Button/Button';
import AddCustom from '../AddCustom/AddCustom';
import AddPrompt from '../AddPrompt/AddPrompt';
import AddQuote from '../AddQuote/AddQuote';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'prompt'
    }

    this.changeType = this.changeType.bind(this);
  }
  chooseType() {
    if(this.state.type === 'prompt') {
      return(<AddPrompt
              changeType={this.changeType}
              newFun={this.props.newFun}
              prompts={this.props.prompts} />)
    }
    if(this.state.type === 'quote') {
      return(<AddQuote
              changeType={this.changeType}
              newFun={this.props.newFun} />)
    }
    if(this.state.type === 'custom') {
      return(<AddCustom
              changeType={this.changeType}
              newFun={this.props.newFun}  />)
    }
  }

  changeType(type) {
    if(type === 'prompt'){
      this.setState({
        type: 'prompt'
      })
    }
    if(type === 'quote'){
      this.setState({
        type: 'quote'
      })
    }
    if(type === 'custom'){
      this.setState({
        type: 'custom'
      })
    }
  }
  render() {
    return(
      <div>
        <div className="container">
          <div className="box">
  	         <p>Choose an entry type</p>
             {this.chooseType()}
         </div>
       </div>


       <br />
       <div className="row">
         <div className="col">
      <Button
        name="Back"
        onClick={this.props.boxClick}
        />
      <br />
    </div>
    <br />
  </div>
  <br />
  </div>
  )
  }
}

export default Add;
