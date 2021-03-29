import React from 'react';
import './Seeker.css';
import Header from '../Header/Header';

export default function Seeker() {
  return (
    <main>
      <Header />
      <section className="header-wrap">
        <div className="title-brand">
          <h1>El tiempo</h1>
        </div>
        <div className="city-title">Barcelona</div>
        <div />
      </section>
    </main>
  );
}

const headWrap = document.querySelector('.head-wrap');
const coordinates = document.createElement('div');
const latitude = document.createElement('p');
const longitude = document.createElement('p');

coordinates.className = 'coordinates';
latitude.className = 'latitude';
longitude.className = 'longitude';

latitude.innerText = `lat: ${coord.lat}`;
longitude.innerText = `long: ${coord.lon}`;

headWrap.appendChild(coordinates);
coordinates.appendChild(latitude);
coordinates.appendChild(longitude);
