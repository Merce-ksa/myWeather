import React from 'react';
// import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="weather-detail">
      <div className="header-wrap">
        <div className="search-wrap">
          <input
            type="text"
            className="input-header"
            placeholder="Busca por ciudad"
          />
          {/* <Link to="#"
          className="fas fa-search"
          onClick="searchByCityName('input-header')" /> */}
        </div>
        <ul key="units" className="measurement-units">
          <li className="metric-list units-active">
            <a href="#">
              <p className="metric">Metric: ºC, m/s</p>
            </a>
          </li>
          <li className="imperial-list">
            <a href="#" className="imperial">
              Imperial: ºF, mph
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
