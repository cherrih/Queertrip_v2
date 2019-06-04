import React from 'react';
import { Link } from 'react-router-dom';

const Guides = (props) => {
  return (
    <div>
      <h2>Guides</h2>
      <div className="guide-container">
        <Link to="/nyc-guide">
          <img src="./images/ny.jpeg"/>
          <h3>Queer guide to NYC</h3>
        </Link>
      </div>
    </div>
  );
}

export default Guides;
