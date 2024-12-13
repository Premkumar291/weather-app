import React from "react";

const Current = ({current , location}) =>{

    return(
        <div>
           <p className="text-white text-center mt-5 mb-5"> <h4>Real Time Weather Of  {location.name},{location.region},{location.country} </h4></p>

            {/* First Row */}

            <div className="row mb-3">

                {/* column one */}

                <div className="col-3 bg-opacity-10">
                    <div className="card bg-opacity-10 bg-light" >
                        <div className="card-title">
                            <h5 className="text-white text-center pt-3">{current.condition.text}</h5>
                        </div>
                    </div>
                </div>

                {/* column Two */}

                <div className="col-3 bg-opacity-10">
                    <div className="card bg-opacity-10 bg-light" >
                        <div className="card-title">
                            <h5 className="text-white text-center pt-3">Temp in celcius :{current.temp_c}°C</h5>
                        </div>
                    </div>
                </div>

                {/* column three */}

                <div className="col-3 bg-opacity-10">
                    <div className="card bg-opacity-10 bg-light" >
                        <div className="card-title">
                            <h5 className="text-white text-center pt-3">Temp in Farenheit :{current.temp_f}°F</h5>
                        </div>
                    </div>
                </div>

                {/* column four */}

                <div className="col-3 bg-opacity-10 ">
                    <div className="card bg-opacity-10 bg-light" >
                        <div className="card-title">
                            <h5 className="text-white text-center pt-3">Humidity : {current.humidity}%</h5>
                        </div>
                    </div>
                </div>

            </div>


            {/* Second Row */}

            <div className="row">

                {/* column one */}

                <div className="col-3 bg-opacity-10">
                    <div className="card bg-opacity-10 bg-light" >
                        <div className="card-title">
                            <h5 className="text-white text-center pt-3"> Wind Speed : {current.wind_kph} km/hr</h5>
                        </div>
                    </div>
                </div>

                {/* column Two */}

                <div className="col-3 bg-opacity-10">
                    <div className="card bg-opacity-10 bg-light" >
                        <div className="card-title">
                            <h5 className="text-white text-center pt-3">Feels Like:{current.feelslike_c}°C</h5>
                        </div>
                    </div>
                </div>

                {/* column three */}

                <div className="col-3 bg-opacity-10">
                    <div className="card bg-opacity-10 bg-light" >
                        <div className="card-title">
                            <h5 className="text-white text-center pt-3">Feels like :{current.feelslike_f}°F</h5>
                        </div>
                    </div>
                </div>

                {/* column four */}

                <div className="col-3 bg-opacity-10">
                    <div className="card bg-opacity-10 bg-light" >
                        <div className="card-title">
                            <h5 className="text-white text-center pt-3">Direction of Wind : {current.wind_dir}</h5>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Current;