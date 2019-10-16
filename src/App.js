import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import WeatherCard from "./components/WeatherCard";
// import { get } from 'https';
// import { log } from 'util';
// import logo from './logo.svg';

function App() {
  const [weather, setWeather] = useState(null);
  const [dailyForecast, setDailyForecast] = useState(null);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(function(position) {
      getData(position.coords.latitude, position.coords.longitude);
      // getDailyData(position.coords.latitude, position.coords.longitude);
    });
  };

  useEffect(() => {
    getLocation();
  }, []);

  const getData = async (lat, lon) => {
    const apiKey = "1121e4c92fe2f0552020c2471fc82b9f";
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=${apiKey}&cnt=6&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    setWeather(data);
  };
  console.log(weather);

  // const getDailyData = async (lat, lon) => {
  //   const apiKey = "1121e4c92fe2f0552020c2471fc82b9f";
  //   const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&APPID=${apiKey}&cnt=10`;
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   console.log(data)
  //   setDailyForecast(data);
  //   console.log(dailyForecast);
  // };

  // let todayForecast = weather && weather.list.filter((item, i) => i < 6);
  // console.log(todayForecast);

  if (!weather)
    return (
      <div className="container d-flex justify-content-center">
        <div className="spinner-grow text-success" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  return (
    <div className="App">
      <div className="container pt-5">
        <div className="text-center">
          <h1 className="display-4">{weather && weather.city.name}</h1>
          <div className="card-group">
            {weather && weather.list.map(item => <WeatherCard info={item} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
