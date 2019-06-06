import React from 'react';
import { Link } from 'react-router-dom';
import Poster from './Poster.jsx';
import ContactForm from '../Global/ContactForm.jsx';

const NewYorkGuide = (props) => {
  return (
    <div className="city-guide-container">
      <div className="city-guide-city">
        <div className="city-description">
          <Link to="/">
            <h4>Queertrip</h4>
          </Link>
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
