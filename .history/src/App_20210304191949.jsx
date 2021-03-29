import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import Landing from './components/Landing/Landing';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact component={Landing} />
    </BrowserRouter>
  );
}

export default App;
