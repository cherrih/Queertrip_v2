import React from 'react';

const Cities = (props) => {
  return (
    <div className="cities-container">
      <div className="cities-sign-up">
        <div>Guide and map to Pride coming shortly</div>
        <div>Sign up to be the first to know when it launches!</div>
        <button type="button" className="cities-sign-up-button rounded-button">Sign Up</button>
      </div>
      <div className="cities-travel rounded-button">
        <span className="cities-traveling">I'm traveling to...</span>
        <span className="cities-search">Search</span>
      </div>
      <div>
        <div className="cities-coming-soon-title">
          Coming soon...
        </div>
        <div className="cities-coming-soon-container">
          <div className="cities-grid-element" />
          <div className="cities-grid-element" />
          <div className="cities-grid-element" />
        </div>
      </div>
    </div>
  );
}

export default Cities;
