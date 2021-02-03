import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './index.css';

import Homescreen from './pages/Homescreen';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Homescreen}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);