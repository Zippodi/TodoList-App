// src/App.js
import React, { useEffect, useState } from "react";
import api from "./Api";

function App() {
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await api.get("/api/weatherforecast");
        setForecast(response.data);
      } catch (err) {
        setError("Error fetching data");
        console.error(err);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div>
      <h1>Weather Forecast</h1>
      {error && <p>{error}</p>}
      <ul>
        {forecast.map((item) => (
          <li key={item.date}>
            {item.date}: {item.temperatureC}°C - {item.summary}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
