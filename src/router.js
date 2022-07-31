// Libs
import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

// Components
import App from './components/App';
import Home from "./components/Home";
import SCR from './components/SCR';
import Links from "./components/Links";
import FullReading from './components/FullReading';
import Instructions from "./components/Instructions";
import NotFound from './components/NotFound';
import $ from 'jquery';
import Privacy from './components/Privacy';

// Routes
const routes = (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Home}></Route>
      <Route path="/instructions" component={Instructions}></Route>
      <Route path="/links" component={Links}></Route>
      <Route path="/single-card-reading" component={SCR}></Route>
      <Route path="/full-reading" component={FullReading}></Route>
      <Route path="/privacy" component={Privacy}></Route>

      <Route path="*" component={NotFound}></Route>
    </Route>
  </Router>
);

export default routes;