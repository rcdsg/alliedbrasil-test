import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PlanosTablet from './pages/PlanosTablet';
import PlanosPC from './pages/PlanosPC';
import PlanosWifi from './pages/PlanosWifi';
import Assinar from './pages/Assinar';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/planos/tablet" component={PlanosTablet} />
        <Route path="/planos/pc" component={PlanosPC} />
        <Route path="/planos/wifi" component={PlanosWifi} />
        <Route path="/assinar" component={Assinar} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
