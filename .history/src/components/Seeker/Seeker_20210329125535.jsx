import React from 'react';
import './Seeker.css';
import Header from '../Header/Header';

export default function Seeker() {
  return (
    <main className="seeker">
      <Header />
      <section>
        <div className="brand-title">
          <h1>El tiempo</h1>
        </div>
        <div className="city-title">Barcelona</div>
      </section>
    </main>
  );
}
