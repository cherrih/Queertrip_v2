import React, { Component } from 'react';
import Poster from './Poster.jsx';
import ContactForm from './ContactForm.jsx';

const NewYorkGuide = (props) => {
  return (
    <div className="city-guide-container">
      <div className="city-guide-city">
        <div className="city-description">
          <h4>Queertrip</h4>
          <h1>NYC</h1>
        </div>
        <h4>Guide coming in 1 week</h4>
        <ContactForm />
      </div>
      <div className="city-guide-map"><Poster /></div>
    </div>
  )
}

export default NewYorkGuide;
