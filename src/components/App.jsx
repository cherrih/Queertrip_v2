import React, { Component } from 'react';
import { HashRouter, Route } from "react-router-dom";
import Home from './Home/Home.jsx';
import NewYorkGuide from './NewYork/NewYorkGuide.jsx';
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
      <HashRouter>
        <Route 
          exact path="/" 
          render={(props) => <Home {...props} cities={cities} />}
        />
        <Route 
          exact path="/nyc-guide" 
          component={NewYorkGuide}
        />
      </HashRouter>
    );
  }
}

export default App;
