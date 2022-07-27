import React, { Component } from 'react';
import { Link } from 'react-router';

const TitleBar = (props) => (
  <Link to={"/"} className="titleBar">
    <div className="bar" {...props}>
      🔮 tarot.lol
    </div>
  </Link>
);

export default TitleBar;