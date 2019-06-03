import React, { Component } from 'react';
import Home from './Home/Home.jsx';
import cities from '../data.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: cities
    };
  }

  render() {
    const { cities } = this.state;
    return (
      <>
        <Home cities={cities} />
      </>
    );
  }
}

export default App;
