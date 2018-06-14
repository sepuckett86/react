import React, { Component } from 'react';

class Examples extends Component {

  render() {
    return (
      <main>
<div className="bgimg-2 parallax">
  <div className="caption">
    <span className="border comfortaa">Examples</span>
  </div>
</div>
<div className="opaque-container">
  <br />
  <div className="container">
    <div className="card">
      <div className="card-body">
      <h5 className="card-title">goodminder<i>noun</i></h5>
    <p className="card-text">A prompt response, quote or custom entry crafted by <b>you</b>.</p>
    <p>Purpose -- to <b>remind</b> you of the <b>good</b> in your life.</p>
  </div>
</div>
  <br />
  <h5 className="comfortaa">Here's what you can do with your account:</h5>

    <div className="row">

      <div className="col col-6">
        <div className="card">
          <a href="./example1.jpg"><img className="card-img-top" src="Media/example1.jpg" alt="example1"/></a>
        <div className="card-body">
          <h5 className="card-title">Print</h5>
          <p className="card-text">Print out your goodminders to hang on your wall or save in a book.</p>

        </div>
        </div>
      </div>
      <br />
    <div className="col col-6">
      <div className="card">
      <a href="./example-screen.jpg"><img className="card-img-top" src="Media/example-screen.jpg" alt="example1"/></a>
      <div className="card-body">
        <h5 className="card-title">Read</h5>
        <p className="card-text">Enjoy your goodminders on your computer with our appealing layout.</p>
      </div>
      </div>
      <br />
    </div>

    <div className="col col-6">
      <div className="card">
        <br />
        <div>
        <i className="fas fa-save"></i>
        </div>
      <div className="card-body">
        <h5 className="card-title">Export</h5>
        <p className="card-text">Save all of your hard work to your desktop with the click of a button.</p>
      </div>
      </div>
      <br />
    </div>

    <div className="col col-6">
      <div className="card">
        <br />
        <div>
        <i className="fas fa-envelope-square"></i>
      </div>
      <div className="card-body">
        <h5 className="card-title">Email</h5>
        <p className="card-text">Choose to receive a goodminder by email daily, weekly, or never</p>
      </div>
      </div>
      <br />
    </div>

    </div>

  </div>
  <br /><br /><br /><br /><br /><br /><br />
</div>

</main>

    );
  }
}

export default Examples;
