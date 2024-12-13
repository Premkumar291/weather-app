import React from "react";

const Forecast = ({forecast , location}) => {
    return(
        <div className="" id="forecast-weather">
            <p className="text-white text-center mt-5 mb-5"> <h4>Forecasting Weather Of  {location.name},{location.region},{location.country} </h4></p>

            {forecast.forecastday.map((data , index) => {
                return(

                    <div className="accordion accordion-flush mt-3" id="accordionFlushExample">

                        <div className="accordion-item" id="elemetn1">
                            <h2 className="accordion-header text-center">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${index}`} aria-expanded="false" aria-controls="flush-collapseOne">
                                <div className="d-flex flex-row flex-align-center mb-3">
                                    <div className="p-2">Date : {data.date}</div>
                                    <div className="p-2"><img src={data.day.condition.icon}></img></div>
                                    <div className="p-2">{data.day.condition.text}</div>
                                    <div className="p-2">Maximum Temperature : {data.day.maxtemp_c}°C</div>
                                </div>
                            </button>
                            </h2>
                            <div id={`${index}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                   {data.hour.map((data)=>{

                                        return(
                                            <>
                                            <h6 className="text-center"> Time : {data.time} || Temparature : {data.temp_c}°C || wind Speed : {data.wind_kph} km/hr</h6>
                                            <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{width: `${data.temp_c}%`}}>
                                                </div>
                                            </div>
                                            </>
                                        )

                                   })}
                                </div>
                            </div>
                        </div>
                    </div>
                    

                )
            })}

        </div>
    );
}

export default Forecast;