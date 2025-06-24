// src/App.tsx
import React, { useState } from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard';

interface WeatherData {
  city: string;
  temperature: number;
  description: string;
  icon: string;
}

const App: React.FC = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    setError('');
    try {
      const apiKey = '93b9a0808f3785fea9bc151abe5de8d9';
      const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`
      );
      const data = await response.json();

      if (data.cod !== 200) throw new Error(data.message);

      const weatherData: WeatherData = {
        city: data.name,
        temperature: data.main.temp,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
      };

      setWeather(weatherData);
    } catch (err: any) {
      setWeather(null);
      setError(err.message);
    }
  };

  return (
      <div className="App">
        <h1>🌦️ WeatherNow</h1>
        <input
            type="text"
            value={city}
            placeholder="Entrez une ville"
            onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Voir la météo</button>

        {error && <p className="error">{error}</p>}

        {weather && <WeatherCard {...weather} />}
      </div>
  );
};

export default App;
