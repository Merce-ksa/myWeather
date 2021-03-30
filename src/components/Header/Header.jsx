import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header>
      <div className="header-wrap">
        <div className="search-wrap">
          <input
            type="text"
            className="input-header"
            placeholder="Busca por ciudad"
          />
          <button type="button" className="fas fa-search" onClick="searchByCityName('input-header')"> search </button>
        </div>
        <ul key="units" className="measurement-units">
          <li className="metric-list units-active">
            <button type="button" className="metrix">
              Metric: ºC, m/s
            </button>
          </li>
          <li className="imperial-list">
            <button type="button" className="imperial">
              Imperial: ºF, mph
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
