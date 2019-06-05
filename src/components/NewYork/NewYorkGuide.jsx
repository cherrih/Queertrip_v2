import React, { Component } from 'react';
import Poster from './Poster.jsx';
import ContactForm from './ContactForm.jsx';

const NewYorkGuide = (props) => {
  return (
    <div className="city-guide-container">
      <div><ContactForm /></div>
      <div><Poster /></div>
    </div>
  )
}

export default NewYorkGuide;
