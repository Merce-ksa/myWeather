import React from 'react';

export default Header() {
    return(
        <header id="header-weather-detail" class="header-weather-detail">
        <div class="header-wrap">
            <div class="search-wrap">
                <input type="text" class="input-header" placeholder="Busca por ciudad">
                <i class="fas fa-search" onclick="searchByCityName('input-header')"></i>
            </div>
            <ul class="measurement-units">
                <li class="metric-list units-active" data-units="metric" data-temp-unit="ºC" data-speed-unit="m/s" onclick="setUnit('metric')">
                    <p class="metric">Metric: ºC, m/s</a>
                </li>
                <li class="imperial-list" data-units="imperial" data-temp-unit="ºF" data-speed-unit="mph" onclick="setUnit('imperial')">
                    <p class="imperial">Imperial: ºF, mph</a>
                </li>
            </ul>
        </div>
    </header>
    )
}