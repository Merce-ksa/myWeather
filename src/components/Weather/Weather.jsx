import React from 'react';
import './Weather.css';
import Header from '../Header/Header';

export default function Weather() {
  return (
    <main>
      <Header />
      <section className="main-weather-detail">
        <div className="title-brand">
          <h1>El tiempo</h1>
        </div>
        <div className="head-wrap">
          <p className="city-title">Barcelona</p>
          <div className="coordinates">
            <p className="latitude">Lat</p>
            <p className="longitude">Long</p>
          </div>
        </div>
        <div className="body-wrap">
          <div className="weather-resum">
            <img src="" alt="resum-weather" />
            <p>16</p>
          </div>
          <ul key="temperature" className="temperature-list">
            <li>
              <p>Esto lo podría automatizar</p>
            </li>
          </ul>
          <ul key="hours-of-light" className="hours-of-light">
            <li>
              <p>Esto lo podría automatizar</p>
            </li>
          </ul>
          <ul key="wind" className="wind">
            <li>
              <p>Esto lo podría automatizar</p>
            </li>
          </ul>
        </div>
        <div />
      </section>
    </main>
  );
}
