import React, { Component } from 'react';
import { Form, Button, FormGroup, FormControl, HelpBlock, ControlLabel } from 'react-bootstrap';
import './ThankYou.css';

class ThankYou extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      name: '',
      item: '',
      item_adjective: '',
      freq_menu: 'I have enjoyed using it.',
      when: '',
      action_together: '',
      event: '',
      event_adjective: '',
      sign_off: 'Best',
      you: '',
      showThankYou: false,
      showEdit: true,
    };
  }

  handleChange(e) {
    if (e.target.id === "name"){
      this.setState({ name: e.target.value });
    }
    if (e.target.id === "item"){
      this.setState({ item: e.target.value });
    }
    if (e.target.id === "item_adjective"){
      this.setState({ item_adjective: e.target.value });
    }
    if (e.target.id === "when"){
      this.setState({ when: e.target.value });
    }
    if (e.target.id === "action_together"){
      this.setState({ action_together: e.target.value });
    }
    if (e.target.id === "you"){
      this.setState({ you: e.target.value });
    }
    if (e.target.id === "event"){
      this.setState({ event: e.target.value });
    }
    if (e.target.id === "event_adjective"){
      this.setState({ event_adjective: e.target.value });
    }
    if (e.target.id === "freq_menu") {
      this.setState({
        freq_menu: e.target.value
      })
    }
    if (e.target.id === "sign_off") {
      this.setState({
        sign_off: e.target.value
      })
    }

  }

  handleClick(e) {
    if (e.target.id === "submit") {
      this.setState({
        showThankYou: true,
        showEdit: false
      })
    }
    if (e.target.id === "edit") {
      this.setState({
        showEdit: true
      })
    }
    if (e.target.id === "example") {
      this.setState({
        name: 'Auntie Meg',
        item: 'gift certificate to Olive Garden',
        item_adjective: 'valuable',
        freq_menu: 'I have enjoyed using it.',
        when: 'last Christmas',
        action_together: 'gorged ourselves on Italian food',
        event: 'my birthday',
        event_adjective: 'kind',
        sign_off: 'Love',
        you: 'Alexis',
        showThankYou: true,
        showEdit: false
      })
    }
    if (e.target.id === "clear") {
      this.setState({
        name: '',
        item: '',
        item_adjective: '',
        freq_menu: 'I have enjoyed using it.',
        when: '',
        action_together: '',
        event: '',
        event_adjective: '',
        sign_off: 'Best',
        you: '',
        showThankYou: false,
        showEdit: true
      })
    }
  }


  makeThankYou() {
    const space = " ";
    const item_adjective = this.state.item_adjective + space;
      return (<div id="thank_you" className="container thanks_container">
        <p>
          Dear {this.state.name}, <br />
          <br />
          Thank you for the {item_adjective}{this.state.item}.
          {space}
          {this.state.freq_menu}
          {space}
          { this.state.when !== '' ? `It reminds me of the time we spent together ${this.state.when} when we ${this.state.action_together}.`
          : null }
          {space}
          It's so {this.state.event_adjective} of you to think of me for {this.state.event}.
          <br /><br />{this.state.sign_off},<br />
          {this.state.you}
        </p>
        <br />
        <Button id="edit" onClick={this.handleClick}>Edit</Button>
      </div>)

  }

  render() {
    const space = " ";
    return (
      <div>
        { this.state.showThankYou ? this.makeThankYou() : null }
        { this.state.showEdit ?
      <div className="container form_container">
        <h4>Fill in the boxes below to make a thank you note:</h4>
        <br />
      <Form>
        <FormGroup
        >
          <ControlLabel>Name of person to thank</ControlLabel>
          <FormControl
            id="name"
            type="text"
            value={this.state.name}
            placeholder="Auntie Meg"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock></HelpBlock>
        </FormGroup>
        <FormGroup
        >
          <ControlLabel>Item received</ControlLabel>
          <FormControl
            id="item"
            type="text"
            value={this.state.item}
            placeholder="gift certificate to Olive Garden"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock></HelpBlock>
        </FormGroup>

        <FormGroup
        >
          <ControlLabel>Adjective describing item</ControlLabel>
          <FormControl
            id="item_adjective"
            type="text"
            value={this.state.item_adjective}
            placeholder="valuable"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock></HelpBlock>
        </FormGroup>

        <FormGroup controlId="freq_menu" onChange={this.handleChange}>
      <ControlLabel>How many times have you used it?</ControlLabel>
      <FormControl componentClass="select" placeholder="select" >
        <option value="I have enjoyed using it. " >At least once</option>
        <option value="I use it every day. ">Every day</option>
        <option value="I use it every week. ">Every week</option>
        <option value="I have used it every month for a while now. ">Every month</option>
        <option value="I am looking forward to using it! ">Never, but I plan on using it</option>
        <option value="It was very thoughtful of you. ">Never, and I will never use it</option>
      </FormControl>
    </FormGroup>

    <FormGroup
    >
      <ControlLabel>Does it remind you of a time you spent with this person? When was that? (optional)</ControlLabel>
      <FormControl
        id="when"
        type="text"
        value={this.state.when}
        placeholder="last Christmas"
        onChange={this.handleChange}
      />
      <FormControl.Feedback />
      <HelpBlock></HelpBlock>
    </FormGroup>

    <FormGroup
    >
      <ControlLabel>What did you do together at that time? (optional)</ControlLabel>
      <FormControl
        id="action_together"
        type="text"
        value={this.state.action_together}
        placeholder="gorged ourselves on Italian food"
        onChange={this.handleChange}
      />
      <FormControl.Feedback />
      <HelpBlock></HelpBlock>
    </FormGroup>

    <FormGroup
    >
      <ControlLabel>Did they give it to you because of an event? What event?</ControlLabel>
      <FormControl
        id="event"
        type="text"
        value={this.state.event}
        placeholder="my birthday"
        onChange={this.handleChange}
      />
      <FormControl.Feedback />
      <HelpBlock></HelpBlock>
    </FormGroup>

    <FormGroup
    >
      <ControlLabel>Adjective describing what the person is for giving you this gift</ControlLabel>
      <FormControl
        id="event_adjective"
        type="text"
        value={this.state.event_adjective}
        placeholder="kind"
        onChange={this.handleChange}
      />
      <FormControl.Feedback />
      <HelpBlock></HelpBlock>
    </FormGroup>

    <FormGroup
    >
      <FormGroup controlId="sign_off" onChange={this.handleChange}>
    <ControlLabel>Sign off</ControlLabel>
    <FormControl componentClass="select" placeholder="select" >
      <option value="Best" >Best</option>
      <option value="Love">Love</option>
      <option value="Sincerely">Sincerely</option>
      <option value="XOXO">XOXO</option>
      <option value="Looking foward to seeing you soon">Looking foward to seeing you soon</option>
    </FormControl>
  </FormGroup>
      <ControlLabel>Your name</ControlLabel>
      <FormControl
        id="you"
        type="text"
        value={this.state.you}
        placeholder="Alexis"
        onChange={this.handleChange}
      />
      <FormControl.Feedback />
      <HelpBlock></HelpBlock>
    </FormGroup>

<br />
        <Button id="submit" bsStyle="primary" onClick={this.handleClick}>Make Thank You Letter!</Button>
        {space}
        <Button id="example" onClick={this.handleClick}>See Example</Button>
        {space}
        <Button id="clear" onClick={this.handleClick}>Clear Data</Button>
      </Form>

    </div>
    : null }

    <br />
    <br />
  </div>
    );
  }
}

export default ThankYou;
