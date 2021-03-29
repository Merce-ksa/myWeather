import React from 'react';
import './Seeker.css';
import Header from '../Header/Header';

export default function Seeker() {
  return (
    <main>
      <Header />
      <section className="main-weather-detail">
        <div className="title-brand">
          <h1>El tiempo</h1>
        </div>
        <div className="head-wrap">
          <p>Barcelona</p>
        </div>
        <div className="coordinates">
          <p className="latitude">Lat</p>
          <p className="longitude">Long</p>
        </div>
        <div className="weather-resum">
          <img src="" alt="resum-weather" />
          <p>16</p>
        </div>
        <div className="body-wrap">
          <ul className="temperature-list-wrap">
            <li>
              <p>Esto lo podría automatizar</p>
            </li>
          </ul>
          <ul className="hours-of-light-wrap">
            <li>
              <p>Esto lo podría automatizar</p>
            </li>
          </ul>
          <ul className="wind-wrap">
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
