import React from "react";
import FormattedDate from "./FormattedDate";
import ReactAnimatedWeather from "react-animated-weather";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />,{" "}
              <span className="text-capitalize">{props.data.description}</span>
            </li>
            <li>
              Humidity: <strong>{props.data.humidity}%</strong>, Wind:{" "}
              <strong>{props.data.wind}km/h</strong>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <div className="temp-container d-flex justify-content-end">
            <WeatherIcon code={props.data.icon} size={52} />

            <span className="temp">{Math.round(props.data.temperature)}</span>
            <span className="unit">°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
