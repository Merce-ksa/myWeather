import React from 'react';

export default Header() {
    return (
    <header key="header-weather-detail" className="header-weather-detail">
        <div className="header-wrap">
            <div className="search-wrap">
                <input type="text" className="input-header" placeholder="Busca por ciudad">
                <i className="fas fa-search" onclick="searchByCityName('input-header')"></i>
            </div>
            <ul key="units" className="measurement-units">
                <li className="metric-list units-active" data-units="metric" data-temp-unit="ºC" data-speed-unit="m/s" onclick="setUnit('metric')">
                    <p className="metric">Metric: ºC, m/s</a>
                </li>
                <li className="imperial-list" data-units="imperial" data-temp-unit="ºF" data-speed-unit="mph" onclick="setUnit('imperial')">
                    <p className="imperial">Imperial: ºF, mph</a>
                </li>
            </ul>
        </div>
    </header>
    );
}