import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const [cityName, setCityName] = useState('');

  return (
    <main key="searcher-content" className="searcher-content">
      <Helmet>
        <meta property="og:title" content="StopBall" />
        <meta property="og:image" content="//i.imgur.com/OIYw1cj.jpg" />
        <meta property="og:description" content="Application of the weather forecast " />
        <meta property="og:url" content="//unruffled-banach-7d4357.netlify.app/" />
        <title>myWeather</title>
      </Helmet>
      <div className="searcher">
        <h1 className="searcher__title">myWeather</h1>
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
