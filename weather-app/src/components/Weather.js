import React, { useState } from 'react';
import './Weather.css';

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchWeather = async () => {
        setLoading(true);
        try {
            //const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f9c1dd50171f5ae1bfee0ecb6dbebeba&units=metric`);
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=83ea3057047027c6c4521d32d69250a0&units=metric`);
            const data = await response.json();
            setWeatherData(data);
        } catch (error) {
            console.error("Error fetching the weather data", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="weather-container">
            <h2>Weather Information</h2>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name"
                className="weather-input"
            />
            <button onClick={fetchWeather} className="weather-button">Get Weather</button>

            {loading && <p>Loading...</p>}

            {weatherData && (
                <div className="weather-info">
                    <h3>{weatherData.name}</h3>
                    <p>{weatherData.weather[0].description}</p>
                    <p>Temperature: {weatherData.main.temp} °C</p>
                    <p>Humidity: {weatherData.main.humidity} %</p>
                </div>
            )}
        </div>
    );
};

export default Weather;