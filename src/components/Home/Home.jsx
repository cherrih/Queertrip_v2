import React from 'react';

const Home = (props) => {
  return (
    <>
      <section id="logo"></section>
      <h1 className="home-title">Helping queerdos <br/> travel queerer.</h1>
      <div className="home-search">
        <div>I'm traveling to...</div>
        <button className="home-button">GO</button>
      </div>
    </>
  );
};

export default Home;
