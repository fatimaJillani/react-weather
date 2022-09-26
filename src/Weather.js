import React from "react";
import "./Weather.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather() {
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
              <li>Saturday 16:53, clear sky Humidity: 40%, Wind: 3.13km/h</li>
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
              <span className="temp">21</span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
