import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Weather.css';
import Header from '../Header/Header';
import weatherFetcher from '../../services/weatherFetcher';
import dateFormater from '../../utils/dateFormater';
// { match: { params: { cityName } } }

export default function Weather() {
  const [weather, setWeatherData] = useState();

  const dataLocation = useLocation();
  const { cityName, units } = dataLocation.state;

  useEffect(() => {
    weatherFetcher(cityName, units).then((result) => {
      setWeatherData(result);
    });
  }, []);

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
              <p>{`${weather.summary.temp.toFixed(1)} ºC`}</p>
            </div>
            <ul key="temperature" className="temperature-list">
              <li>
                <p>{`Feel ${weather.summary.feels_like.toFixed(1)} ºC`}</p>
              </li>
              <li>
                <p>{`Min ${weather.summary.temp_min.toFixed(1)} ºC`}</p>
              </li>
              <li>
                <p>{`Max ${weather.summary.temp_max.toFixed(1)} ºC`}</p>
              </li>
              <li>
                <p>{`${weather.summary.pressure} hPa`}</p>
              </li>
              <li>
                <p>{`${weather.summary.humidity} %`}</p>
              </li>
            </ul>
            <ul key="hours-of-light" className="hours-of-light">
              <li>
                <p>{dateFormater(weather.sunrise)}</p>
              </li>
              <li>
                <p>{dateFormater(weather.sunset)}</p>
              </li>
            </ul>
            <ul key="wind" className="wind">
              <li>
                <p>{`${weather.wind.speed} m/s`}</p>
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

Weather.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ cityName: PropTypes.string }).isRequired
  }).isRequired
};
