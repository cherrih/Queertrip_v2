import React from 'react';

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-buttons-container">
        <button type="button" className="header-who rounded-button">Who?</button>
        <div>
          <h1>Queertrip</h1>
          <h3>Helping queerdos travel queerer</h3>
        </div>
        <button type="button" className="header-why rounded-button">Why?</button>
      </div>
      <nav className="header-nav">
        <div>
          <a href="#">History</a>
          <a href="#">Events</a>
          <a href="#">Just Pride</a>
        </div>
        <div>
          <a href="#">Spaces</a>
          <a href="#">Nightlife</a>
        </div>
      </nav>
      <div className="header-line" />
    </div>
  );
};

export default Header;
