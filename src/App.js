import React, {useState} from "react";

const App = () => {

  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState('');

  const apiKey = '6bda00bdd81ca9526fd3d41cd0f589cd';

  const getWeather = (event) => {
    if (event.key === "Enter") {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`).then(
        response => response.json()
      ).then(
        data => {
          setWeatherData(data)
          setCity("")
        }
      )
    }
  }


  return(
    <div className="container">
      <input className="input" 
      placeholder="ENTER CITY" onChange={e => setCity(e.target.value)}
      value={city}
      onKeyPress={getWeather}
       />

    {typeof weatherData.main === "undefined" ? (
      <div>
        <p>Welcome to Weather App! Enter in a city to get the Weather of.</p>
      </div>
    ): (
      <div className="weather-data">
        <p className="city">{weatherData.name}</p>
        <p className="temp">{Math.round(weatherData.main.temp)}°F</p>
        <p className="wather">{weatherData.weather[0].main}</p>
      </div>
    )}

      {weatherData.cod === "404" ? (
        <p>City not found</p>
      ) : (
        <></>
      )}
    </div>
  )
}

export default App