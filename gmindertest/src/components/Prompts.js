import React, { Component } from 'react';

class Prompts extends Component {

  render() {
    const prompts = this.props.prompts;
    return (
        <div className="container">
          <ul>
              {prompts.map((prompt) => {
                return(
                <li key={prompt.promptID}>
                  {prompt.promptID}{'\u00A0'}
                  {prompt.collection}{'\u00A0'}
                  {prompt.promptText}</li>
                )
            })}
            </ul>

        </div>
    );
  }
}

export default Prompts;
