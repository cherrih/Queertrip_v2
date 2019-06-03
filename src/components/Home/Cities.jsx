import React from 'react';
import City from './City.jsx';

const Cities = ({cities}) => {
  return (
    <div className="cities-container">
      <h2>Queerest Cities</h2>
      <div>{cities.map((city, i) => {
        return <City key={i} city={city} index={i + 1} />
      })}
      </div>
    </div>
  );
}

export default Cities;
