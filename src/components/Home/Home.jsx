import React from 'react';
import ContactForm from '../Global/ContactForm.jsx';
import LogoLarge from '../Global/LogoLarge.jsx';
import Guides from './Guides.jsx';
import Cities from './Cities.jsx';

const Home = ({ cities }) => {
  return (
    <>
      <LogoLarge />
      <h1 className="home-title">Helping queerdos <br/> travel queerer.</h1>
      <ContactForm />
      <div className="home-mid-section-container">
        <div className="guides-container"><Guides /></div>
        <div className="cities-container"><Cities cities={cities}/></div>
      </div>
    </>
  );
};

export default Home;
