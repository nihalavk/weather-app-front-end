import React from 'react'
import { useState } from 'react';
import axios from 'axios';

// function Weather() {

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6840817c9758d75c99dd8be24b340003`);
        const temperatureCelsius = response.data.main.temp - 273.15;
        response.data.main.temp = temperatureCelsius.toFixed(2);
      setWeather(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
           <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={getWeather}>Get Weather</button>
      {weather && (
        <div>
          <h3>Weather in {weather.name}</h3>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  )

}

export default Weather