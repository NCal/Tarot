// Libs
import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

// Components
import App from './components/App';
import SCR from './components/SCR';
import About from './components/about';
import FullReading from './components/FullReading';
import NotFound from './components/notfound';
import $ from 'jquery';

// Routes
const routes = (
   <Router history={browserHistory}>
      <Route component={App}>
         <Route  path="/Tarot/about" component={About}></Route>
         <Route  path="/Tarot/scr" component={SCR}></Route>
         <Route  path="/Tarot" component={FullReading}></Route>
         <Route path="*" component={NotFound}></Route>
      </Route>
   </Router>
);

export default routes;