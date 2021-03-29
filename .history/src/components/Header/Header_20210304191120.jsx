import React from 'react';

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
          <Link type="button" className="fas fa-search" onClick="searchByCityName('input-header')" />
        </div>
        <ul key="units" className="measurement-units">
          <li
            className="metric-list units-active"
          >
            <a href="#">
              <p className="metric">Metric: ºC, m/s</p>
            </a>
          </li>
          <li className="imperial-list" data-units="imperial" data-temp-unit="ºF" data-speed-unit="mph" onClick="setUnit('imperial')">
            <a href="#">
              <p className="imperial">Imperial: ºF, mph</p>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
