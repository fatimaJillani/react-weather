import "./styles.css";
import WeatherSearch from "./WeatherSearch";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherSearch />
      <footer>
        <a href="https://github.com/fatimaJillani/react-weather">Open-source</a>{" "}
        code, by Fatima Jillani
      </footer>
    </div>
  );
}
