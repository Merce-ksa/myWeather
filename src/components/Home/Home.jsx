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
            id="searcher"
            className="location"
            value={cityName}
            name="cityName"
            onChange={(event) => setCityName(event.target.value)}
            placeholder="Search by location"
            required
          />
          <div className="form-button">
            <Link
              to={{
                pathname: '/weather',
                state: { cityName: `${cityName}`, units: 'metric' }
              }}
              className="search"
            >
              Search

            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
