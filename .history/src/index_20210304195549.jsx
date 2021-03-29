import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Landing from './components/Landing/Landing';
import Seeker from './components/Seeker/Seeker';

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" exact component={Landing} />
    <Route path="/seeker" component={Seeker} />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
