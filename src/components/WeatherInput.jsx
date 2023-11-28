import { useState } from "react";

export default function WeatherInput({ searchHandler }) {
  const [city, setCity] = useState("");

  const handleChange = (event) => {
    setCity(event.target.value);
  };
  return (
    <div className="weather-input">
      <input
        type="text"
        onChange={handleChange}
        value={city}
        placeholder="Enter City Name"
      />
      <button
        onClick={() => {
          if (city) {
            searchHandler(city);
            setCity("");
          } else {
            alert("Please enter some city name");
          }
        }}
      >
        Search
      </button>
    </div>
  );
}
