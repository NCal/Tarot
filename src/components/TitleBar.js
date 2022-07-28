import React, { Component } from 'react';
import { Link } from 'react-router';

const TitleBar = (props) => (
  <Link to={"/"} className="titleBar">
    <div className="bar" {...props}>
      tarot.lol 2022 🔮
    </div>
  </Link>
);

export default TitleBar;