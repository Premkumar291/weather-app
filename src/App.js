import React,{useState , useEffect} from 'react';
import '../node_modules/bootstrap/dist/js/bootstrap';
import axios from 'axios';
import './App.css';
import Current from './Components/Current';
import Forecast from './Components/Forecast';

function App() {

  const [city , setCity ] = useState();
  const [cityList , setCityList] = useState([]);
  const [location , setLocation] = useState();
  const [current , setCurrent] = useState();
  const [forecast , setForecast] = useState();

  const autoApi = "https://api.weatherapi.com/v1/search.json?key=c63b1454ea50430f84373525243110&q="
  const currentApi = (city) =>`https://api.weatherapi.com/v1/forecast.json?key=c63b1454ea50430f84373525243110&q=${city}&days=3&aqi=no&alerts=no`;

  useEffect(()=>{
      if(city && city.length > 3)
        { 
          fetchAutoApi();
        }
  },[city]);

  const fetchAutoApi = async() => {
    try{
      const response = await axios.get(autoApi + city);
      const resp = await response.data;
      
      const cityData = resp.map((data)=>{
        return `${data.name} , ${data.region} , ${data.country}`
      });
      setCityList(cityData);

    }catch(e){}
  }

  const fethcCityApi = async(data) =>{
    
    try{

      const response = await axios.get(currentApi(data));
      const resp = await response.data;
      setCurrent(resp.current);
      setForecast(resp.forecast);
      setLocation(resp.location);
    }
    catch{}
    setCityList([])
  }

  return (

    <div className="container bg-primary p-5 ml-5 mt-5" id='new Div'>
        <p className='text-center text-white pb-3'><h1>Weather App</h1></p>
        <div className="input-group mb-3 ">
          <div className='form-floating'>
          <input type="text"  className="form-control" id="floatingInput" placeholder='Enter city Name' 
          onChange={(e)=>{
            setCity(e.target.value) ;
            if (e.target.value ===""){
              setCurrent();
              setForecast();
              setLocation();  
            }
          }}/>
          <label for="floatingInput">Enter City Name</label>
          </div>
          
        </div>
        {cityList && cityList.map((data)=>{
          return <div className='text-center text-white bg-success  border border-danger rounded p-2 bg-opacity-6' style={{cursor:'pointer'}}
                    onClick={()=>fethcCityApi(data)}>
                      {data}
                  </div>
        })}

        {current && <Current current={current} location={location} /> }
        {forecast && <Forecast forecast={forecast} location={location} /> }
    </div>
  );
}

export default App;
