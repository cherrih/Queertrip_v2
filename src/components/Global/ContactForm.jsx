import React, { Component } from 'react';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      placeholder: 'Enter your email to request an invite...'
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
    const { email } = this.state;
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbzZSUe0geTQH2YzndQIHg4LLp6PGN5_vtPHo5iwG_SaiLP86HM/exec';
    const url = `${scriptUrl}?callback=ctrlq&Email=${email}`;
    fetch(url)
      .then(() => {
        this.setState({
          placeholder: 'Successfully submitted. Keep an eye on that inbox!',
        })
      })
      .catch(() => {
        this.setState({
          placeholder: 'Oops! Please try that again!'
        })
      });
    this.setState({
      email: '',
      placeholder: 'Cool! I\'m working on that...'
    })
  }

  render() {
    const { email, placeholder } = this.state;
    return (
      <form className="contact-form" onSubmit={this.onFormSubmit}>
        <input type="email" placeholder={placeholder} value={email} name="email" onChange={this.onInputChange} className="contact-input" required={true} />
        <input type="submit" value="GO" className="contact-submit"/>
      </form>
    )
  }
}

export default ContactForm;
