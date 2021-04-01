import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const [cityName, setCityName] = useState('');

  return (
    <main key="searcher-content" className="searcher-content">
      <div className="searcher">
        <h1 className="searcher__title">El tiempo</h1>
        <div className="searcher__form">
          <input
            type="text"
            className="location"
            value={cityName}
            name="cityName"
            onChange={(event) => setCityName(event.target.value)}
            placeholder="Nombre de la población"
          />
          <div className="form-button">
            <Link
              to={`/weather/${cityName}`}
              params={{ cityName: `${cityName}` }}
              className="search"
            >
              Buscar

            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
