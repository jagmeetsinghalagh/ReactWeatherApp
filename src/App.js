import React, { Component } from 'react';
import './App.css';

import SearchBar from './components/search_bar';
import CityWeatherList from './components/city_weather_list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <CityWeatherList />
      </div>
    );
  }
}

export default App;
