// Libs
import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import Featured from './components/Featured';

// Components
import App from './components/App';
import SCR from './components/SCR';
import About from './components/about';
import Courses from './components/Courses';
import FullReading from './components/FullReading';
// import HTML from './components/courses/HTML';
import CSS from './components/courses/CSS';
import JavaScript from './components/courses/JavaScript';
import NotFound from './components/notfound';
import CourseContainer from './components/courses/CourseContainer';
import $ from 'jquery';
// Routes

import CourseList from './data/courses';

const routes = (
   <Router history={browserHistory}>
      <Route component={App}>
         <Route  path="about" component={About}></Route>
         <Route  path="scr" component={SCR}></Route>
         {/*<Route  path="courses"  component={Courses}>
            <IndexRedirect to="HTML"></IndexRedirect>
            <Route path="html"  component={CourseContainer} data={CourseList.HTML}></Route>
            <Route path="css" component={CourseContainer}  data={CourseList.CSS}></Route>
            <Route path="javascript" component={CourseContainer}  data={CourseList.JS}></Route>
         </Route>*/}
         <Route  path="/" component={FullReading}></Route>
         <Route path="*" component={NotFound}></Route>
      </Route>
   </Router>
);

export default routes;