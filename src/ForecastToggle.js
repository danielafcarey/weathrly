import React, { Component } from 'react';

class ForecastToggle extends Component {
  
  toggleCards = (event) => {
    let sibling = "nextSibling";

    if (event.target.name === "tenDay") {
      sibling = "previousSibling";
    }

    event.target.classList.add('clicked-button');
    event.target[sibling].classList.remove('clicked-button');
    this.props.toggleForecastBtnState(event.target.name);
  }

  render() {
    return (
      <div className="forecast-buttons">
        <button onClick={this.toggleCards}
                className="seven-hour-button clicked-button"
                name="sevenHour">7 hour</button>
        <button onClick={this.toggleCards} 
                className="ten-day-button"
                name="tenDay">10 day</button>
      </div>
    );
  }
}
  




export default ForecastToggle;