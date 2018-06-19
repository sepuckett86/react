import React from 'react';

class PDF extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gminders: ['This is the story: It was Spring. The warm sunshine and soft breezes were trying to lure students away from their classes.', "Two"],
      gminder: [{
        text: `This is the story: It was Spring. The warm sunshine and soft breezes were trying to lure students away from their classes.\
      Santayana was seated at his desk reading to his students. His listeners were sitting, or reclining, in various attitudes of inattention.\
      Santayana’s voice trailed off, his eyes traveled over his students, and fixed themselves on a tree which grew outside the window.\
      Its leaves were small and tender, and of the green green of new leaves. Santayana closed the book. A short silence elapsed.\
      He rose, and said: "Gentlemen, it is Spring!" He took his hat and never returned.`,
      author: 'Will Durant'}, {
        text: 'Booyah',
        author: 'Me'
      }]
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (e.target.id === "make-PDF") {
      this.makePDF();
    }
  }

  makePDF() {
    var jsPDF = require('jspdf');
    // Units are cm
    var size = 'small tradebook'
    if (size == 'small tradebook') {
      var doc = new jsPDF({
      unit: 'cm',
      format: [13, 20]
    })
    }
    // Margins:
    let margin = 1;
    doc.setDrawColor(0, 255, 0)
    	.setLineWidth(1 / 72)
    	.line(margin, margin, margin, 20 - margin)
    	.line(13 - margin, margin, 13 - margin, 20 - margin);

    for (let i = 0; i < this.state.gminders.length; i++) {
      doc.text(1,1,this.state.gminders[i]);
      if (i < this.state.gminders.length - 1) {
        doc.addPage();
      }
    }
    doc.save('small_tradebook.pdf')
  }
  render() {
    return(<button id="make-PDF" onClick={this.handleClick}>Make PDF</button>)
  }
}

export default PDF;
