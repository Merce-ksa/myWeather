import React from 'react';

export default function Header(){
    
    return (
        <header key="header-weather-detail" className="weather-detail">
            <div className="header-wrap">
                <div className="search-wrap">
                    <input type="text" 
                        className="input-header" 
                        placeholder="Busca por ciudad"
                    >
                    <span className="fas fa-search" onclick="searchByCityName('input-header')"></span>
                </div>
                <ul key="units" className="measurement-units">
                    <li 
                        className="metric-list units-active" 
                        data-units="metric" 
                        data-temp-unit="ºC" 
                        data-speed-unit="m/s" 
                        onclick="setUnit('metric')"
                    >
                        <a href="#">
                            <p className="metric">Metric: ºC, m/s</p>
                        </a>
                    </li>
                    <li className="imperial-list" data-units="imperial" data-temp-unit="ºF" data-speed-unit="mph" onclick="setUnit('imperial')">
                        <a href="#">
                        <p className="imperial">Imperial: ºF, mph</p>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}