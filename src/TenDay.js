import React from 'react';
import Card from './Card';

const TenDay = ({ data, buttonState }) => {
  let tenDayArray = data.map((day, index) => {
    let highLow = `${ day.high } / ${ day.low }`;
    return <Card 
              title={ day.day } 
              icon={ day.icon } 
              temp={ highLow } 
              key={ index } 
            />
  });
  

  return (
    <div className={ buttonState ? "ten-day" : "hidden" }>
      { tenDayArray }
    </div>
  );
}

export default TenDay;