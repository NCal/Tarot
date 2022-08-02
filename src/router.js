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
      <Route path="/" component={Home} title="Home"></Route>
      <Route path="/instructions" component={Instructions} title="Instructions"></Route>
      <Route path="/links" component={Links} title="Links"></Route>
      <Route path="/single-card-reading" component={SCR} title="Single Card Reading"></Route>
      <Route path="/full-reading" component={FullReading} title="Full Reading"></Route>
      <Route path="/privacy" component={Privacy} title="Privacy"></Route>

      <Route path="*" component={NotFound} title="404: Not Found"></Route>
    </Route>
  </Router>
);

export default routes;