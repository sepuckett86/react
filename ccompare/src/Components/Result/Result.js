import React from 'react';
import './Result.css';
import Graph from '../Graph/Graph';

class Result extends React.Component {
  // Look up data for particular site
  checkActive(site) {
    // Define what user wants to compare
    let menu1 = this.props.menus[0];
    let menu2 = this.props.menus[1];
    // Entire data set
    let results = this.props.results;
    // Cycle through entire data set looking for a match
    for (let i = 0; i < results.length; i++) {
      if (results[i].site === site) {
        if (results[i].items.includes(menu1.active)
        && results[i].items.includes(menu2.active)) {
          return results[i].result;
        }
      }
    }
  }

  displayResult() {
    let menu1 = this.props.menus[0];
    let menu2 = this.props.menus[1];
    // Make array of data
    let data = [];
    this.props.sites.forEach(site => {
      data.push(this.checkActive(site));
    })

    if(menu1.active === menu2.active) {
      return <p>Pick two different options</p>
    } else {
            return(
                <div>
                <p>Comparing {menu1.active} + {menu2.active}:</p>
                <div className="row">

                <div className='col'>
                <table className="table">
                  <thead>
                <tr>
                  <th scope="col">Site</th>
                  <th scope="col">Result</th>
                </tr>
              </thead>
                <tbody>
                {
                  this.props.sites.map(site => {
                    return <tr key={site}>
                         <th scope="row">{site}</th>
                         <td><p>{this.checkActive(site)}</p>
                           </td>
                       </tr>
                     })
                   }
                 </tbody>
                </table>
              </div>

         <div className='col'>
           <Graph
              results={this.props.results}
              sites={this.props.sites}
              menu1={this.props.menus[0]}
              menu2={this.props.menus[1]}
              />
         </div>
       </div>
     </div>)
          }
  }

  showResult() {
    if (this.props.showResult === true) {
      return (this.displayResult())
    }
  }
  render() {
    return <div><hr />{this.showResult()}</div>
  }
}

export default Result;
