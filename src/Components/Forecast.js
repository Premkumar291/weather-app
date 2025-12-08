import React from "react";

const Forecast = ({ forecast, location }) => {
    return (
        <div className="fade-in">
            {/* Section Header */}
            <div className="section-header">
                <h4>📅 3-Day Weather Forecast - {location.name}, {location.region}, {location.country}</h4>
            </div>

            {/* Accordion Wrapper - Outside the map */}
            <div className="accordion forecast-accordion" id="forecastAccordion">
                {forecast.forecastday.map((data, index) => {
                    return (
                        <div className="accordion-item" key={index}>
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#forecast-${index}`}
                                    aria-expanded="false"
                                    aria-controls={`forecast-${index}`}
                                >
                                    <div className="d-flex flex-row align-items-center justify-content-between w-100 flex-wrap">
                                        <div className="p-2">📅 {data.date}</div>
                                        <div className="p-2"><img src={data.day.condition.icon} alt={data.day.condition.text}></img></div>
                                        <div className="p-2">{data.day.condition.text}</div>
                                        <div className="p-2">🌡️ Max: {data.day.maxtemp_c}°C</div>
                                        <div className="p-2">❄️ Min: {data.day.mintemp_c}°C</div>
                                    </div>
                                </button>
                            </h2>
                            <div
                                id={`forecast-${index}`}
                                className="accordion-collapse collapse"
                                data-bs-parent="#forecastAccordion"
                            >
                                <div className="accordion-body">
                                    {data.hour.map((hourData, hourIndex) => {
                                        return (
                                            <div className="hourly-item" key={hourIndex}>
                                                <h6 className="text-center">
                                                    ⏰ {hourData.time} | 🌡️ {hourData.temp_c}°C | 💨 {hourData.wind_kph} km/h | 💧 {hourData.humidity}%
                                                </h6>
                                                <div className="progress" role="progressbar" aria-label="Temperature indicator" aria-valuenow={hourData.temp_c} aria-valuemin="0" aria-valuemax="100">
                                                    <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: `${Math.min(hourData.temp_c, 100)}%` }}>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    );
}

export default Forecast;
