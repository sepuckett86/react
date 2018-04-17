import React from 'react';
import './Graph.css';
import * as d3 from 'd3';

class Graph extends React.Component {
  displayName: 'Graph';

  componentDidMount() {
    this.makeGraph();
  }

  // Make array of data
  makeDataArray() {
    let data = [];
    let menu1 = this.props.menu1;
    let menu2 = this.props.menu2;
    let results = this.props.results;
    // Cycle through entire data set looking for a match
    this.props.sites.forEach(site => {
      for (let i = 0; i < results.length; i++) {
        if (results[i].site === site) {
          if (results[i].items.includes(menu1.active)
          && results[i].items.includes(menu2.active)) {
            data.push(results[i].result);
          }
        }
      }
    })

    return data
  }

  makeGraph() {
    const data1 = this.makeDataArray();
    return d3.select(".graph")
      .selectAll('div')
      .data(data1)
        .enter()
        .append('div')
        .style('width', function(d) { return d + 'px';})
        .text(function(d) { return d; })
  }

  render() {
    return(<div className='graph'></div>)
  }
}

export default Graph;
