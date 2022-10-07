import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function DayForecast(props) {
  function maxTemp() {
    let temp = Math.round(props.data.temp.max);
    return `${temp}`;
  }
  function minTemp() {
    let temp = Math.round(props.data.temp.min);
    return `${temp}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="DayForecast">
      <div className="Day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="temperatures">
        <span className="max-temp">{maxTemp()}°</span>
        <span className="min-temp">{minTemp()}°</span>
      </div>
    </div>
  );
}
