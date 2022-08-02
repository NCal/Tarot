import React, { Component } from 'react';
import { Link } from 'react-router';

const Navlink  = (props) => (
   <Link className="navlink" {...props} activeClassName="active" />
);

export default Navlink;