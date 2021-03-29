import React from 'react';
import './Landing.css';

export default function Landing() {
  return (
    <main key="seeker" className="seeker">
      <div className="seeker-wrap">
        <h1 className="seeker-title">El tiempo</h1>
        <div className="form-wrap">
          <input type="text" className="input-seeker" placeholder="Nombre de la población" />
          <button type="button" className="action-search" onClick="searchByCityName('input-seeker')">Buscar</button>
        </div>
      </div>
    </main>
  );
}
