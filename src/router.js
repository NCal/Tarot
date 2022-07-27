// Libs
import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

// Components
import App from './components/App';
import Home from "./components/Home";
import SCR from './components/SCR';
import About from './components/About';
import FullReading from './components/FullReading';
import NotFound from './components/NotFound';
import $ from 'jquery';

// Routes
const routes = (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/single-card-reading" component={SCR}></Route>
      <Route path="/full-reading" component={FullReading}></Route>
      <Route path="*" component={NotFound}></Route>
    </Route>
  </Router>
);

export default routes;