import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
    </BrowserRouter>
  );
}

export default App;
