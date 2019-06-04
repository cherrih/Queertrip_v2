import React, { Component } from 'react';
import Poster from './Poster.jsx';
import $ from 'jquery';

class NewYorkGuide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      pronouns: '',
      email: '',
      phone: ''
    }
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    const { target } = e;
    const { name, value } = target;
    this.setState({
      [name]: value
    });
  }

  onFormSubmit(e) {
    e.preventDefault();
    const { name, pronouns, email, phone } = this.state;
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbzZSUe0geTQH2YzndQIHg4LLp6PGN5_vtPHo5iwG_SaiLP86HM/exec';
    const url = `${scriptUrl}?callback=ctrlq&name=${name}&pronouns=${pronouns}&email=${email}&phone=${phone}`;
    fetch(url)
      .then((response) => {
        response.json();
      });
  }

  render() {
    const { name, pronouns, email, phone } = this.state;
    return (
      <div className="city-guide-container">
        <div>
          <form onSubmit={this.onFormSubmit}>
            <label>
              Name:
              <input type="text" value={name} name="name" onChange={this.onInputChange} />
            </label>
            <label>
              Pronouns:
              <input type="text" value={pronouns} name="pronouns" onChange={this.onInputChange} />
            </label>
            <label>
              Email:
              <input type="text" value={email} name="email" onChange={this.onInputChange} />
            </label>
            <label>
              Phone:
              <input type="text" value={phone} name="phone" onChange={this.onInputChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div><Poster /></div>
      </div>
    )
  }
}

export default NewYorkGuide;
