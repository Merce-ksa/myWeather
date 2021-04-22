import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './assets/styles/index.css';
import Home from './components/Home/Home';
import Weather from './components/Weather/Weather';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/weather/" component={Weather} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
