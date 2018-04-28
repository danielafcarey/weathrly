import React, { Component } from 'react';
import Search from './Search';
import InvalidLocation from './InvalidLocation';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
import Cleaner from './Cleaner';
import ForecastToggle from './ForecastToggle'
import fetchApi from './Api';

class App extends Component {
  constructor() {
    super();
    this.state = {
      apiData: null,
      location: '',
      sevenHourBtnClicked: true,
      tenDayBtnClicked: false,
      validLocation: true
    };

    this.submitLocation = this.submitLocation.bind(this);
    this.getApiData = this.getApiData.bind(this);
    this.validateAndCleanApiData = this.validateAndCleanApiData.bind(this);
    this.toggleForecastBtnState = this.toggleForecastBtnState.bind(this);
  }

  componentDidMount() {
    if (localStorage.weathrly) {
      this.setState({ location: localStorage.getItem('weathrly') }, this.getApiData);
    }
  }

  submitLocation(userInputLocation) {
    this.setState({ location: userInputLocation }, this.getApiData);
  }

  getApiData() {
    if (this.state.location) {
      fetchApi(this.state.location).then(response => {
        response.json().then(this.validateAndCleanApiData)
      }).catch(error => console.log(error));
    }
  }

  validateAndCleanApiData(data) {
    if (data.response.error || !data.current_observation) {
      this.setState({ validLocation: false });
      return;
    } else {
      let cleanData = Cleaner(data)
      this.setState({ validLocation: true, apiData: cleanData });
      localStorage.setItem('weathrly', this.state.location);
    }
  }

  toggleForecastBtnState(buttonName) {
    if (buttonName === 'sevenHour') {
      this.setState({ sevenHourBtnClicked: true, tenDayBtnClicked: false });
    } else {
      this.setState({ sevenHourBtnClicked: false, tenDayBtnClicked: true });
    }
  }

  displayWelcome() {
    return (
      <div className="App Welcome">
        <h1>What's the weather today?</h1>
        <Search submitLocation={ this.submitLocation } />
        <InvalidLocation validLocation={ this.state.validLocation }/>
      </div>
    );
  }

  displayApp() {
    return (
      <div className="App Main">
        <Search submitLocation={ this.submitLocation } />
        <InvalidLocation validLocation={ this.state.validLocation }/>
        <CurrentWeather currentWeather={ this.state.apiData.currentDayObject } />
        <ForecastToggle toggleForecastBtnState={ this.toggleForecastBtnState } />
        <SevenHour data={ this.state.apiData.sevenHourArray } buttonState={ this.state.sevenHourBtnClicked } />
        <TenDay data={ this.state.apiData.tenDayArray } buttonState={ this.state.tenDayBtnClicked } />
      </div>
    );
  }

  render() {
    if (!this.state.apiData) {
      return this.displayWelcome();
    } else {
      return this.displayApp();
    }
  }

};

export default App;
