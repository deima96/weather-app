export function WeatherDisplay({ result }) {
  console.log(result);
  const { main, name, sys, weather } = result;
  const temp = Math.round(main.temp - 273.15);
  const icon = weather[0].icon;
  const icon_url = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  const weather_detail = weather[0].description;
  return (
    <div className="weather-card">
      <p className="city-name">
        {name}
        <sup>{sys.country}</sup>
      </p>
      <span>
        {temp}
        &deg;C
      </span>
      <img src={icon_url} alt={weather_detail} />
      <p>{weather_detail}</p>
    </div>
  );
}
