import React, { Component } from "react";

class Links extends Component {
    constructor(props, context) {
      super(props, context);
   }

   componentDidMount(){
    document.title = "Learn More"
   }
   render(){

  return (
    <div className="main-content">
      <br />
      <h2 className="title">Learn More</h2>
      <p>
        Though there is a lot one can find out about Tarot on the internet, it
        can be difficult to find unbiased information.
      </p>
      <p>Here are some links to get started.</p>
      <a href="https://en.wikipedia.org/wiki/Tarot" target={"_blank"}>
        <h3>Tarot on Wikipedia</h3>

        <img
          style={{ maxWidth: "330px" }}
          className=""
          src={
            "https://s3.amazonaws.com/tarot.lol/assets/wikipedia_logo.svg.png"
          }
          alt="Wikipedia Globe Logo"
        />
      </a>

      <a href="https://en.wikipedia.org/wiki/Cartomancy" target={"_blank"}>
        <h3>Cartomancy on Wikipedia</h3>
      </a>
      <p>Cartomancy is fortune-telling or divination using a deck of cards.</p>

      <a href="https://en.wikipedia.org/wiki/Divination" target={"_blank"}>
        <h3>Divination on Wikipedia</h3>
      </a>
      <p style={{ borderBottom: "1px solid #555", paddingBottom: "20px" }}>
        Divination is the attempt to gain insight into a question or situation
        by way of standardized process or ritual.
      </p>
      <img
        className="break-image"
        src={"https://s3.amazonaws.com/tarot.lol/assets/2.png"}
        alt="Two interwoven rings, a design element denoting the end of page content"
      />
    </div>
  );
   }
};

export default Links;
