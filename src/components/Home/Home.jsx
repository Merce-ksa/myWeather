import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <main key="searcher-content" className="searcher-content">
      <div className="searcher">
        <h1 className="searcher__title">El tiempo</h1>
        <div className="searcher__form">
          <input type="text" className="location" placeholder="Nombre de la población" />
          <div className="form-button">
            <button type="button" onClick="handleClick" className="search">Buscar</button>
          </div>
        </div>
      </div>
    </main>
  );
}
