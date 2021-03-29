import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

// function fetchWeather(cityName, units) {
//   const urlWeather = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&&lang=sp&units=${units}&appid=3c74ac129f18ab59e709f229523cbc05`;
//   const fetchResponse = fetch(urlWeather);

//   const jsonResponse = fetchResponse
//     .then((response) => response.json());

//   return jsonResponse;
// }

// function searchByCityName(inputType) {
//   let cityName;

//   if (inputType === 'input-seeker') {
//     cityName = document.querySelector('.input-seeker').value;
//   } else {
//     cityName = document.querySelector('.input-header').value;
//   }

//   if (!cityName.trim()) {
//     return;
//   }

export default function Landing() {
  return (
    <main key="seeker" className="seeker">
      <div className="seeker-wrap">
        <h1 className="seeker-title">El tiempo</h1>
        <div className="form-wrap">
          <input type="text" className="input-seeker" placeholder="Nombre de la población" />
          <Link to="/seeker" className="action-search">Buscar</Link>
        </div>
      </div>
    </main>
  );
}
