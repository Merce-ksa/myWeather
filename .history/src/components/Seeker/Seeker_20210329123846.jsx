import React from 'react';
import Header from '../Header/Header';

export default function Seeker() {
  return (
    <>
      <Header />
      <section>
        <div className="city-title">Barcelona</div>
      </section>
    </>
  );
}

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

//   if (!cityName.trim()) { Elimina todos los espacios en blanco
//     return;
//   }
