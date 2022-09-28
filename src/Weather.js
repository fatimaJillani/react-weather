import React, { useState } from "react";
import "./Weather.css";
import ReactAnimatedWeather from "react-animated-weather";
import axios from "axios";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.main.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control search-input"
              />
            </div>
            <div className="col-3 p-0">
              <input
                type="submit"
                value="Search"
                className="btn
        btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <div className="WeatherInfo">
          <div className="row">
            <div className="col-6">
              <h1>New York</h1>
              <ul>
                <li>
                  Saturday 16:53,{" "}
                  <span className="text-capitalize">
                    {weatherData.description}
                  </span>
                </li>
                <li>
                  Humidity: <strong>{weatherData.humidity}%</strong>, Wind:{" "}
                  <strong>{weatherData.wind}km/h</strong>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <div className="temp-container d-flex justify-content-end">
                <ReactAnimatedWeather
                  icon="CLEAR_DAY"
                  color="goldenrod"
                  size={52}
                  animate={true}
                />
                <span className="temp">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "46b40c91da850e7ce26d34e492f3163f";
    let city = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
