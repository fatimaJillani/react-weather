import React, { useState } from "react";
import "./DaysForecast.css";
import axios from "axios";
import DayForecast from "./DayForecast";

export default function DaysForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="DaysForecast">
        <div className="row">
          <div className="col">
            <DayForecast data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "46b40c91da850e7ce26d34e492f3163f";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
