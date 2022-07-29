import React, { Component } from "react";

const Links = (props) => {
  return (
    <div className="main-content">
      <h2 className="title">Links</h2>
      <p>
        Often the Tarot is attributed magical qualities, able to predict the
        future. Though, there is a lot one can find out about Tarot on the
        internet, it is really hard to find honest information.
      </p>
      <a href="https://en.wikipedia.org/wiki/Tarot" target={"_blank"}>
        <h3>Tarot on Wikipedia</h3>

        <img
          style={{ maxWidth: "330px" }}
          className=""
          src={
            "https://s3.amazonaws.com/tarot.lol/assets/wikipedia_logo.svg.png"
          }
          alt=""
        />
      </a>

      <a href="https://en.wikipedia.org/wiki/Cartomancy" target={"_blank"}>
        <h3>Cartomancy on Wikipedia</h3>
      </a>
      <p>Cartomancy is fortune-telling or divination using a deck of cards.</p>

      <a href="https://en.wikipedia.org/wiki/Divination" target={"_blank"}>
        <h3>Divination on Wikipedia</h3>
      </a>
      <p>
        Divination is the attempt to gain insight into a question or situation
        by way of standardized process or ritual.
      </p>
      <img
        className="break-image"
        src={"https://s3.amazonaws.com/tarot.lol/assets/2.png"}
        alt=""
      />
    </div>
  );
};

export default Links;
