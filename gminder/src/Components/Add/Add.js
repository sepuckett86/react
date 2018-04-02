import React from 'react';
import './Add.css';

class Add extends React.Component {
  render() {
    return(
      <div>
        <h1 className="main-header">Add</h1>
  <div className="container">
  <div className="box">
  	<p>Choose an entry type</p>
          <ul className="nav nav-tabs" id="myTab" role="tablist">
    <li className="nav-item">
      <a className="nav-link active" id="prompt-tab" data-toggle="tab" href="#prompt" role="tab" aria-controls="home" aria-selected="true">Prompt</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" id="quote-tab" data-toggle="tab" href="#quote" role="tab" aria-controls="quote" aria-selected="false">Quote</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" id="custom-tab" data-toggle="tab" href="#custom" role="tab" aria-controls="custom" aria-selected="false">Custom</a>
    </li>
  </ul>
  <div className="tab-content" id="myTabContent">
    <div className="tab-pane fade show active" id="prompt" role="tabpanel" aria-labelledby="prompt-tab">
  <br />

      <form>
          <div className="form-group">
              <p className="paragraph-prompt" id="promptId_4">From Prompt Collection: Happy</p>
              <h4 className="lato">Who is your favorite celebrity?</h4>
              <br />
              <p>Next prompt from:
              <a href="#" className="button-clear"><i className="fas fa-arrow-circle-right"></i> Same collection</a> |
              <a href="#" className="button-clear"><i className="fas fa-arrow-circle-right"></i> All collections</a></p>
              <label for="answer">Answer</label>
              <textarea className="form-control" id="prompt-answer" rows="3"></textarea>
              <br />
              <label for="reason">Reason</label>
              <textarea className="form-control" id="prompt-reason" rows="3"></textarea>
          </div>
          <button id="btn-prompt-submit" type="submit" className="btn btn-primary">Submit</button>
      </form>

    </div>
    <div className="tab-pane fade" id="quote" role="tabpanel" aria-labelledby="quote-tab">
      <br />

      <form>
          <div className="form-group">
              <label for="answer">Quote</label>
              <textarea className="form-control" id="quote" rows="3" placeholder="Example: May your beer be laid under an enchantment of surpassing excellence for seven years!"></textarea>
              <br />
              <div className="form-group">
                  <label for="who">Who said it (optional)</label>
                  <input type="text" className="form-control" id="quote-who" placeholder="Example: Gandalf"/>
              </div>
              <br />
              <div className="form-group">
                  <label for="source">Source (optional)</label>
                  <input type="text" className="form-control" id="quote-source" placeholder="Example: The Fellowship of the Ring"/>
              </div>
              <br />
              <div className="form-group">
                  <label for="author">Author</label>
                  <input type="text" className="form-control" id="quote-author" placeholder="Example: J. R. R. Tolkien"/>
              </div>
              <br />
              <label for="reason">Reason</label>
              <textarea className="form-control" id="quote-reason" rows="3" placeholder="Example: When I was reading this out loud with my husband, we laughed like hyenas"></textarea>
              <br />
              <div className="form-group">
                  <label for="q-collection">Collection (optional)</label>
                  <input type="text" className="form-control" id="quote-category" placeholder="Example: Funny"/>
              </div>
          </div>
          <br />
          <button id="btn-quote-submit" type="submit" className="btn btn-primary">Submit</button>
      </form>

      <br />
    </div>
    <div className="tab-pane fade" id="custom" role="tabpanel" aria-labelledby="custom-tab">

      <form>
          <div className="form-group">
              <br />
              <label for="x">Enter Anything</label>
              <textarea className="form-control" id="customText" rows="3"></textarea>
              <br />
              <div className="form-group">
                  <label for="category">Custom Category</label>
                  <input type="text" className="form-control" id="custom-category" placeholder="Example: Affirmations"/>
              </div>
          </div>
          <button id="btn-custom-submit" type="submit" className="btn btn-primary">Submit</button>
      </form>

  </div>
  </div>
  </div>
  </div>
  </div>
  )
  }
}

export default Add;
