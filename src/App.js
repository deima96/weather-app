import "./App.css";
import { useState } from "react";
import { key } from "./Key";
import WeatherInput from "./components/WeatherInput";
import { WeatherDisplay } from "./components/WeatherDisplay";

function App() {
  const [error, setError] = useState();
  const [resData, setResData] = useState();

  const searchWeather = async (city) => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
      );
      const resData = await response.json();
      const { main, name, sys, weather } = resData;
      setResData({ main, name, sys, weather });
      if (!response.ok) {
        throw new Error("Failed to fetch Temperature");
      }
    } catch (error) {
      setError({
        message: error.message || `Failed to fetch the Temperature for ${city}`,
      });
    }
  };

  return (
    <div className="App">
      <WeatherInput searchHandler={searchWeather} />
      {resData && <WeatherDisplay result={resData} />}
      {error && <div>{error.message}</div>}
    </div>
  );
}

export default App;
