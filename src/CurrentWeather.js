import React from 'react';

const CurrentWeather = ({ currentWeather }) => {
  return (
    <div className="current-weather">
      <h2 className="selected-location">{ currentWeather.location }</h2>
      <section className="current-weather-info">
        <h1 className="current-weather-temp">{ currentWeather.currentInfo.temp }</h1>
        <p className="current-weather-condition">{ currentWeather.currentInfo.condition }</p>
      </section>
      <section className="current-day-forecast">
        <img className="current-weather-icon" 
             src={`/weather-icons/${ currentWeather.currentInfo.icon }.png`} 
             alt="current weather icon"/>
        <h4 className="current-weather-day">{ currentWeather.currentInfo.day }</h4>
        <p className="day-high-low">High: { currentWeather.forecast.high } / Low: { currentWeather.forecast.low }</p>
        <p className="day-summary">{ currentWeather.forecast.summary }</p>
      </section>
    </div>
  );
 }

export default CurrentWeather;