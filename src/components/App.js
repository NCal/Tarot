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
                <Navlink to="/Tarot">Full Reading</Navlink>
              </li>
              <li>
                <Navlink to="/Tarot/scr">Single Card Reading</Navlink>
              </li>
              <li>
                <Navlink to="/Tarot/about">About</Navlink>
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