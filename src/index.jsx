import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './assets/styles/index.css';
import Home from './components/Home/Home';
import Weather from './components/Weather/Weather';

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" exact component={Home} />
    <Route path="/weather/" component={Weather} />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
