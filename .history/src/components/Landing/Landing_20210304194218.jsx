import React from 'react';
import './Landing.css';

export default function Landing() {
  return (
    <main id="seeker" class="seeker">
        <div class="seeker-wrap">
            <h1 class="seeker-title">El tiempo</h1>
            <div class="form-wrap">
                <input type="text" class="input-seeker" placeholder="Nombre de la población">
                <a class="action-search" onclick="searchByCityName('input-seeker')">Buscar</a>
            </div>
        </div>
    </main>
  );
}
