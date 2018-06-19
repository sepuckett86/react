import React from 'react';
import Gminder from '../../../../../../Utils/Gminder'

class PDF extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gminders: [],
      prompts: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    // Get data from database
    Gminder.getGminders().then(res => this.setState({gminders: res.express})).catch(err => console.log(err)).then(() => {
      Gminder.getPrompts().then(res => this.setState({prompts: res.express})).catch(err => console.log(err)).then(() => {
        return;
      })
    })
    }

  handleClick(e) {
    if (e.target.id === "make-PDF") {
      this.makePDF();
    }
  }

  makePDF() {
    const jsPDF = require('jspdf');
    // @TODO: Need to simplify this demo

var doc = new jsPDF('p', 'cm', [13,20])
  var sizes = [15]
  var fonts = [['Times', 'Roman']];
  var font;
  var size;
  var lines;
  var margin = 4; // inches on a 8.5 x 11 inch sheet.
  var verticalOffset = margin;
  var loremipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id eros turpis. Vivamus tempor urna vitae sapien mollis molestie. Vestibulum in lectus non enim bibendum laoreet at at libero. Etiam malesuada erat sed sem blandit in varius orci porttitor. Sed at sapien urna. Fusce augue ipsum, molestie et adipiscing at, varius quis enim. Morbi sed magna est, vel vestibulum urna. Sed tempor ipsum vel mi pretium at elementum urna tempor. Nulla faucibus consectetur felis, elementum venenatis mi mollis gravida. Aliquam mi ante, accumsan eu tempus vitae, viverra quis justo.\n\nProin feugiat augue in augue rhoncus eu cursus tellus laoreet. Pellentesque eu sapien at diam porttitor venenatis nec vitae velit. Donec ultrices volutpat lectus eget vehicula. Nam eu erat mi, in pulvinar eros. Mauris viverra porta orci, et vehicula lectus sagittis id. Nullam at magna vitae nunc fringilla posuere. Duis volutpat malesuada ornare. Nulla in eros metus. Vivamus a posuere libero.'

for (let j = 0; j < this.state.gminders.length; j++) {
for (var i in fonts) {
  if (fonts.hasOwnProperty(i)) {
    font = fonts[i]
    size = sizes[i]
    loremipsum = this.state.gminders[j].mainResponse;
    lines = doc.setFont(font[0], font[1])
					.setFontSize(size)
					.splitTextToSize(loremipsum, 11)
    // This code puts the text on the document.
    // (horizontal, vertical, text)
    doc.text(1, verticalOffset + size / 72, lines)

  }
}
if (j < this.state.gminders.length - 1) {
  // make new page if not last gminder
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
