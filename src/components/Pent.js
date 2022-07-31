import React, { Component } from "react";
import { Link } from "react-router";

const Pent = (props) => (
    <Link to={"/links"} className="">

  <img
    className="pent"
    src="https://s3.amazonaws.com/tarot.lol/assets/pent.png"
  />
  </Link>
);

export default Pent;
