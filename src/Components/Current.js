import React from "react";

const Current = ({ current, location }) => {

    return (
        <div className="fade-in">
            {/* Section Header */}
            <div className="section-header">
                <h4>🌡️ Current Weather - {location.name}, {location.region}, {location.country}</h4>
            </div>

            {/* Weather Grid - Responsive */}
            <div className="weather-grid">

                {/* Weather Condition Card */}
                <div className="weather-card featured-card">
                    <div className="card-icon">☁️</div>
                    <h5>{current.condition.text}</h5>
                </div>

                {/* Temperature Celsius Card */}
                <div className="weather-card">
                    <div className="card-icon">🌡️</div>
                    <h5>Temperature</h5>
                    <h5>{current.temp_c}°C</h5>
                </div>

                {/* Temperature Fahrenheit Card */}
                <div className="weather-card">
                    <div className="card-icon">🌡️</div>
                    <h5>Temperature</h5>
                    <h5>{current.temp_f}°F</h5>
                </div>

                {/* Humidity Card */}
                <div className="weather-card">
                    <div className="card-icon">💧</div>
                    <h5>Humidity</h5>
                    <h5>{current.humidity}%</h5>
                </div>

                {/* Wind Speed Card */}
                <div className="weather-card">
                    <div className="card-icon">💨</div>
                    <h5>Wind Speed</h5>
                    <h5>{current.wind_kph} km/h</h5>
                </div>

                {/* Feels Like Celsius Card */}
                <div className="weather-card">
                    <div className="card-icon">🌡️</div>
                    <h5>Feels Like</h5>
                    <h5>{current.feelslike_c}°C</h5>
                </div>

                {/* Feels Like Fahrenheit Card */}
                <div className="weather-card">
                    <div className="card-icon">🌡️</div>
                    <h5>Feels Like</h5>
                    <h5>{current.feelslike_f}°F</h5>
                </div>

                {/* Wind Direction Card */}
                <div className="weather-card">
                    <div className="card-icon">🧭</div>
                    <h5>Wind Direction</h5>
                    <h5>{current.wind_dir}</h5>
                </div>

            </div>

        </div>
    );
}

export default Current;
