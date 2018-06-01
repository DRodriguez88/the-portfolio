import React, { Component } from "react";
import "../style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      name: '',
      email: '',
      phone: '',
      website: '',
      subject: '',
      message: ''
    };

    this.clickToggle = this.clickToggle.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  clickToggle(e) {
    e.preventDefault();
    this.setState(
      {
        isClicked: !this.state.isClicked
      },
      () => console.log(this.state)
    );
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    }, ()=>console.log(this.state))
  }

  renderForm() {
    return (
      <form className="form-style-9">
        <ul>
          <li>
            <input
              type="text"
              name="name"
              className="field-style field-split align-left"
              placeholder="Name"
              onChange={this.changeHandler}
            />
            <input
              type="email"
              name="email"
              className="field-style field-split align-right"
              placeholder="Email"
              onChange={this.changeHandler}
            />
          </li>
          <li>
            <input
              type="text"
              name="phone"
              className="field-style field-split align-left"
              placeholder="Phone"
              onChange={this.changeHandler}
            />
            <input
              type="url"
              name="website"
              className="field-style field-split align-right"
              placeholder="Website"
              onChange={this.changeHandler}
            />
          </li>
          <li>
            <input
              type="text"
              name="subject"
              className="field-style field-full align-none"
              placeholder="Subject"
              onChange={this.changeHandler}
            />
          </li>
          <li>
            <textarea name="field5" className="field-style" placeholder="Message" onChange={this.changeHandler} />
          </li>
          <li>
            <input type="submit" value="Send Message" onClick={this.clickToggle}/>
          </li>
        </ul>
      </form>
    );
  }

  render() {
    return (
      <div className="App flex-container">
        {this.state.isClicked ? (
          this.renderForm()
        ) : (
          <button className="fancy" id="contact" onClick={this.clickToggle}>
            <h3><strong>Contact Danilo</strong></h3>
          </button>
        )}
        <div className="fancy" id="name">
          <h1 className="words">Danilo Rodriguez</h1>
          <hr />
          <h3 className="words">Danilo is a blah blah who does yadda yadda.</h3>
        </div>
      </div>
    );
  }
}

export default App;
