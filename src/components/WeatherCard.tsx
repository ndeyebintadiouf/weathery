// src/components/WeatherCard.tsx
import React from 'react';

interface WeatherProps {
    city: string;
    temperature: number;
    description: string;
    icon: string;
}

const WeatherCard: React.FC<WeatherProps> = ({ city, temperature, description, icon }) => {
    return (
        <div className="weather-card">
            <h2>{city}</h2>
            <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={description} />
            <p>{description}</p>
            <h3>{temperature}°C</h3>
        </div>
    );
};

export default WeatherCard;
