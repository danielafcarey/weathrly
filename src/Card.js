import React from 'react';

const Card = ({ title, icon, temp }) => {
  return (
    <div className="card">
      <h3 className="title">{ title }</h3>
      <img src={`/weather-icons/${ icon }.png`}
           alt="weather icon"
           />
      <h3 className="temp">{ temp } ℉</h3>
    </div>
  );
};

export default Card;