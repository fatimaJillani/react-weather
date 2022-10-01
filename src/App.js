import "./App.css";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          <a href="https://github.com/fatimaJillani/react-weather">
            Open-source
          </a>{" "}
          code, by Fatima Jillani
        </footer>
      </div>
    </div>
  );
}
