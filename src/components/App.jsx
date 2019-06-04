import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
        <Router>
          <Route 
            exact path="/" 
            render={(props) => <Home {...props} cities={cities} />}
          />
        </Router>
      </>
    );
  }
}

export default App;
