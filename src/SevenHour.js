import React from 'react';
import Card from './Card';

const SevenHour = ({ data, buttonState }) => {
  let sevenHourArray = data.map((hour, index) => {
    return <Card 
              title={ hour.hour } 
              icon={ hour.icon } 
              temp={ hour.temp } 
              key={ index } 
            />
  });
  
  return (
    <div className={ buttonState ? "seven-hour" : "hidden" } >
      { sevenHourArray }
    </div>
  );
}

export default SevenHour;