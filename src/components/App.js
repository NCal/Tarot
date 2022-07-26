import React, { Component } from 'react';
import Navlink from './Navlink';

const App = (props) => {
    return (
      <div className="container">
      <div className="top"></div>
        <div className="left">
          <header>
            <ul className="main-nav">
              <li>
                <Navlink to="/">Full Reading</Navlink>
              </li>
              <li>
                <Navlink to="/single-card-reading">Single Card Reading</Navlink>
              </li>
              <li>
                <Navlink to="/about">About</Navlink>
              </li>
            </ul>
          </header>
        </div>
        <div className="center" >
          {props.children}
        </div>
        <div className="right">
        </div>
      </div>
    );
}

export default App;