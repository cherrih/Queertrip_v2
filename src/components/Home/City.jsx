import React from 'react';

const City = (props) => {
  return (
    <div className="city-list-container">
      <div className="city-list-cities">{props.city.name}</div>
      <div className="city-categories-container">
        <div className="city-categories">
          <div className="city-category-value">{props.city.queervibes}</div>
          <div className="city-category-name">queervibes</div>
        </div>
        <div className="city-categories">
          <div className="city-category-value">{props.city.fun}</div>
          <div className="city-category-name">fun</div>
        </div>
        <div className="city-categories">
          <div className="city-category-value">{props.city.safety}</div>
          <div className="city-category-name">safety</div>
        </div>
        <div className="city-categories">
          <div className="city-category-value">{props.city.weather}</div>
          <div className="city-category-name">weather</div>
        </div>
      </div>
    </div>
  );
}

export default City;
