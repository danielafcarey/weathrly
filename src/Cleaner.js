const cleanApiData = (apiData) => {
  let currentDayObject = {
    location: apiData.current_observation.display_location.full,
    currentInfo: {
      day: apiData.forecast.txt_forecast.forecastday[0].title,
      condition: apiData.current_observation.weather,
      temp: Math.round(apiData.current_observation.temp_f),
      icon: apiData.current_observation.icon
    },
    forecast: {
      high: apiData.forecast.simpleforecast.forecastday[0].high.fahrenheit,
      low: apiData.forecast.simpleforecast.forecastday[0].low.fahrenheit,
      summary: apiData.forecast.txt_forecast.forecastday[0].fcttext
    }
  };

  let sevenHourArray = () => {
    return apiData.hourly_forecast.map((hourObj) => {
      return {
        hour: hourObj.FCTTIME.civil.split(':')[0] + hourObj.FCTTIME.ampm,
        icon: hourObj.icon,
        temp: hourObj.temp.english,
        key: hourObj.FCTTIME.hour
      };
    }).slice(0, 7);
  };

  let tenDayArray = () => {
    return apiData.forecast.simpleforecast.forecastday.map((day, index) => {
      return {
        day: day.date.weekday,
        icon: day.icon,
        high: day.high.fahrenheit,
        low: day.low.fahrenheit,
        key: day.period
      };
    });
  };

  return { currentDayObject, sevenHourArray: sevenHourArray(), tenDayArray: tenDayArray() };

};

export default cleanApiData;