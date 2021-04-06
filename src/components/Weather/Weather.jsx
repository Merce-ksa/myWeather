import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Weather.css';
import Header from '../Header/Header';
import weatherFetcher from '../../services/weatherFetcher';
import dateFormater from '../../utils/dateFormater';
import unitsFormater from '../../utils/unitsFormater';

export default function Weather() {
  const [weather, setWeatherData] = useState();

  const dataLocation = useLocation();
  const { cityName, units } = dataLocation.state;

  useEffect(() => {
    weatherFetcher(cityName, units).then((weatherData) => {
      setWeatherData(weatherData);
    });
  }, [cityName, units]);

  if (weather !== undefined) {
    return (
      <main>
        <Header />

        <section className="main-weather-detail">
          <div className="title-brand">
            <h1>myWeather</h1>
          </div>
          <div className="head-wrap">
            <p className="city-title">{weather.cityName}</p>
            <div className="coordinates">
              <p className="latitude">{`lat ${weather.coord.lat}`}</p>
              <p className="longitude">{`lon ${weather.coord.lon}`}</p>
            </div>
          </div>
          <div className="body-wrap">
            <div className="weather-resum">
              <img src={`http://openweathermap.org/img/wn/${weather.icon}@4x.png`} alt="resum-weather" />
              <p>{`${weather.summary.temp.toFixed(1)} ${unitsFormater(units, 'temperature')}`}</p>
            </div>
            <ul key="temperature" className="temperature-list">
              <li>
                <span>Feel</span>
                <p>
                  {`${weather.summary.feels_like.toFixed(1)} ${unitsFormater(units, 'temperature')}`}
                </p>
              </li>
              <li>
                <span>Min</span>
                <p>{`${weather.summary.temp_min.toFixed(1)} ${unitsFormater(units, 'temperature')}`}</p>
              </li>
              <li>
                <span>Max</span>
                <p>{`${weather.summary.temp_max.toFixed(1)} ${unitsFormater(units, 'temperature')}`}</p>
              </li>
              <li>
                <span>Pressure</span>
                <p>{`${weather.summary.pressure} hPa`}</p>
              </li>
              <li>
                <span>Humidity</span>
                <p>{`${weather.summary.humidity} %`}</p>
              </li>
            </ul>
            <ul key="hours-of-light" className="hours-of-light">
              <li>
                <span className="icofont-sun-rise" />
                <p>{dateFormater(weather.sunrise)}</p>
              </li>
              <li>
                <span className="icofont-sun-set" />
                <p>{dateFormater(weather.sunset)}</p>
              </li>
            </ul>
            <ul key="wind" className="wind">
              <li>
                <p>{`${weather.wind.speed} ${unitsFormater(units, 'speed')}`}</p>
                <div
                  className="wind-direction"
                  style={{ transform: `rotate(${weather.wind.deg}deg)` }}
                >
                  <span>➤</span>
                </div>
              </li>
            </ul>
          </div>
          <div />
        </section>
      </main>
    );
  }
  return (
    null
  );
}
