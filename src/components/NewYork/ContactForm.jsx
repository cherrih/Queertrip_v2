import React, { Component } from 'react';

class ContactForm extends Component {
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
      .then(() => {
        this.setState({
          name: '',
          pronouns: '',
          email: '',
          phone: ''
        })
      });
  }

  render() {
    const { name, pronouns, email, phone } = this.state;
    return (
      <form className="contact-form" onSubmit={this.onFormSubmit}>
        <input type="text" placeholder="name" value={name} name="name" onChange={this.onInputChange} />
        <input type="text" placeholder="pronouns" value={pronouns} name="pronouns" onChange={this.onInputChange} />
        <input type="email" placeholder="email" value={email} name="email" onChange={this.onInputChange} />
        <input type="text" placeholder="phone" value={phone} name="phone" onChange={this.onInputChange} />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default ContactForm;
