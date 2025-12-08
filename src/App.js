import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/js/bootstrap";
import axios from "axios";
import "./App.css";
import Current from "./Components/Current";
import Forecast from "./Components/Forecast";

function App() {
  const [city, setCity] = useState();
  const [cityList, setCityList] = useState([]);
  const [location, setLocation] = useState();
  const [current, setCurrent] = useState();
  const [forecast, setForecast] = useState();
  const whapi = "c63b1454ea50430f84373525243110";


  const autoApi = `https://api.weatherapi.com/v1/search.json?key=${whapi}&q=`;
  const currentApi = (city) =>
    `https://api.weatherapi.com/v1/forecast.json?key=${whapi}&q=${city}&days=3&aqi=no&alerts=no`;


  const fetchAutoApi = React.useCallback(async () => {
    try {
      const response = await axios.get(autoApi + city);
      const resp = await response.data;

      const cityData = resp.map((data) => {
        return `${data.name} , ${data.region} , ${data.country}`;
      });
      setCityList(cityData);
    } catch (e) { }
  }, [autoApi, city]);

  useEffect(() => {
    if (city && city.length > 3) {
      fetchAutoApi();
    }
  }, [city, fetchAutoApi]);

  const fethcCityApi = async (data) => {
    try {
      const response = await axios.get(currentApi(data));
      const resp = await response.data;
      setCurrent(resp.current);
      setForecast(resp.forecast);
      setLocation(resp.location);
    } catch { }
    setCityList([]);
  };

  return (
    <div className="weather-container">
      {/* Header Section */}
      <div className="weather-header">
        <h1>
          <span style={{ filter: 'none', background: 'none', WebkitTextFillColor: 'initial' }}>🌤️</span>
          {' '}Weather App
        </h1>
      </div>

      {/* Search Section */}
      <div className="search-container">
        <div className="search-wrapper">
          {/* Search Icon */}
          <span className="search-icon">🔍</span>

          {/* Search Input */}
          <input
            type="text"
            className="search-input"
            placeholder="Search for a city..."
            onChange={(e) => {
              setCity(e.target.value);
              if (e.target.value === "") {
                setCurrent();
                setForecast();
                setLocation();
              }
            }}
          />

          {/* Autocomplete Dropdown */}
          {cityList && cityList.length > 0 && (
            <div className="autocomplete-list">
              {cityList.map((data, index) => {
                return (
                  <div
                    key={index}
                    className="autocomplete-item"
                    onClick={() => fethcCityApi(data)}
                  >
                    📍 {data}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Current Weather Section */}
      {current && <Current current={current} location={location} />}

      {/* Forecast Section */}
      {forecast && <Forecast forecast={forecast} location={location} />}
    </div>
  );
}

export default App;

