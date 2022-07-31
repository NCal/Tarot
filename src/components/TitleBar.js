import React, { Component } from 'react';
import { Link } from 'react-router';
import Navlink from './Navlink';

const TitleBar = (props) => (
  <div className=" titleBar " {...props}>
    <div className="bar">
      <ul className="bottom-nav">
        <Navlink to="/">
          <li>Tarot.lol</li>
        </Navlink>
        <Navlink to="/instructions">
          <li>Instructions</li>
        </Navlink>
        <Navlink to="/full-reading">
          <li>Full Reading</li>
        </Navlink>
        <Navlink to="/single-card-reading">
          <li>Single Card Reading</li>
        </Navlink>
        {/* <li>
                    <Navlink
                      to="/about"
                              >
                      About
                    </Navlink>
                  </li> */}
        <Navlink to="/privacy">
          <li>Privacy & Cookies</li>
        </Navlink>
      </ul>
    </div>
  </div>
);

export default TitleBar;