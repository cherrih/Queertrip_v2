import React from 'react';
import Header from './Header.jsx';
import Poster from './Poster.jsx';
import Cities from './Cities.jsx';

const Home = (props) => {
  return (
    <div>
      <Header />
      <Poster />
      <Cities />
    </div>
  );
};

export default Home;
