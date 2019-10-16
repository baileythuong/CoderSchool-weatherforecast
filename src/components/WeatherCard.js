import React from "react";
import moment from "moment";

export default function WeatherCard(props) {
  return (
    <div className="card">
    <div className="card-body">
      <p className="card-title text-muted">{moment(props.info.dt_txt).calendar()}</p>
      <h2 className="card-text">{Math.round(props.info.main.temp)}°C</h2>
       <h4 className="card-text"><img
          alt=""
          src={
            `http://openweathermap.org/img/w/${props.info.weather[0].icon}.png`
          }
        ></img>
        {props.info.weather[0].description}
      </h4>
    </div>
    </div>
  );
}
