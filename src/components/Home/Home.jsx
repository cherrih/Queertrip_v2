import React from 'react';
import Guides from './Guides.jsx';
import Cities from './Cities.jsx';

const Home = ({ cities }) => {
  return (
    <>
      <section id="logo"></section>
      <h1 className="home-title">Helping queerdos <br/> travel queerer.</h1>
      <div className="home-search">
        <div>I'm traveling to...</div>
        <button className="home-button">GO</button>
      </div>
      <div className="home-mid-section-container">
        <div className="guides-container"><Guides /></div>
        <div className="cities-container"><Cities cities={cities}/></div>
      </div>
    </>
  );
};

export default Home;
