import React, { Component } from 'react';
import { Link } from 'react-router';
import Navlink from './Navlink';

const TitleBar = (props) => (
  <Link to={"/"} className="titleBar">
    <div className="bar" {...props}>
      <ul className="bottom-nav">
        <li>
          <Navlink
            to="/"
          >
          Tarot.lol
          </Navlink>
        </li>
        <li>
          <Navlink
            to="/instructions"
          >
            Instructions
          </Navlink>
        </li>
        <li>
          <Navlink
            to="/full-reading"
          >
            Full Reading
          </Navlink>
        </li>
        <li>
          <Navlink
            to="/single-card-reading"
          >
            Single Card Reading
          </Navlink>
        </li>
        {/* <li>
                    <Navlink
                      to="/about"
                              >
                      About
                    </Navlink>
                  </li> */}
        <li>
          <Navlink
            to="/links"
          >
            Learn More
          </Navlink>
        </li>
      </ul>
    </div>
  </Link>
);

export default TitleBar;