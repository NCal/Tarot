import React, { Component } from "react";
import cardData from "../data/cardData.js";
import $ from "jquery";
import Pent from './Pent';
import { Link } from "react-router";

class Home extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      new: true,
      loading: false,
      name: "Card",
      src: null,
      random_card_flipped: null,
      random_card_name: null,
      random_card_description: null,
      random_card_upright: null,
      random_card_reversed: null,
    };
  }

  componentDidMount = () => {
    this.getRandomCard();
  }

  getRandomCard = () => {
    console.group("get random card");
    let flipped = false;
    let self = this;
    let cards = this.props.Cards;
    let randNum = Math.floor(Math.random() * (78 - 0 + 1));
    let randCard = cards[randNum];
    let randName = randCard.name;
    let randKeysUp = randCard.keywords.upright;
    let randKeysRev = randCard.keywords.reversed;
    let src = randCard.src;
    let randDes = randCard.description.basic;
    let randUpright = randCard.description.upright;
    let randReversed = randCard.description.reversed;
    let reading = $(".reading_container");
    let paras = document.getElementsByTagName("p");
    console.log("card drawn", randCard);
    $(".description").innerHTML = randDes;

    reading.hide();

    self.setState(
      {
        new: false,
        loading: true,
        random_card_flipped: flipped,
        random_card_name: randName,
        random_card_keys_up: randKeysUp,
        random_card_keys_rev: randKeysRev,
        random_card_description: randDes,
        random_card_upright: randUpright,
        random_card_reversed: randReversed,
        random_card_src: src,
      },
      function () {
        // setTimeout(function () {
          self.setState({ loading: false }, function () {
            if (this.state.random_card_flipped) {
              $("img").addClass("card_image_reversed");
            } else {
              $("img.card_image").removeClass("card_image_reversed");
            }
            reading.show();
          });
          self.replace_break(paras);
        // }, 2000);
      }
    );
    console.groupEnd();
  };

  replace_break = (paras) => {
    console.log("replace break");
    for (let i = 0; i < paras.length; i++) {
      let new_p = paras[i].innerHTML.replace(/\r?\n/g, "<br/>");
      paras[i].innerHTML = new_p;
    }
  };
  render = () => {
      return (
        <div className="main-content">
          <br />
          <Pent className="home-pent" />
          &nbsp;
          <h2
            className="title"
            style={{ display: "inline-block", marginBottom: "0px" }}
          >
            Tarot.lol
          </h2>
          <img
            className="card_image"
            src={"https://s3.amazonaws.com/tarot.lol/assets/59_Cups10.jpg"}
            alt="Welcome Image, 10 of Cups Tarot Card"
          />
          <div className="home_content">
            <p>Welcome to Tarot.lol </p>

            <p>
              With this site anyone can get a complete tarot reading with
              in-depth situational analysis in seconds.
            </p>

            {/* <p>
              Say you don't have access to a deck of cards, but want to
              able get a quick tarot reading. As long as there is a computer, tablet,
              or smart-phone nearby, you can.
            </p> */}
            <p>
              The advice within the readings is often universal - and due the
              the sheer amount of card combinations, whether you choose to do a
              reading once a month or every day, the readings are always
              interesting and applicable.
            </p>
            <p>Check out the <Link to="/instructions">Instructions</Link> if you're new.</p>
            <p>
              Already know how it works? Head over to the{" "}
              <Link to="/full-reading">Full Reading</Link> page to draw your
              cards.
            </p>
          </div>
          <img
            className="break-image"
            src={"https://s3.amazonaws.com/tarot.lol/assets/2.png"}
            alt="Two interwoven rings, a design element denoting the end of page content"
          />
        </div>
      );
  };
}

// PROPS
Home.defaultProps = {
  name: "Card",
  kind: "Child",
  Cards: cardData[0].Cards,
};

Home.propTypes = {
  name: React.PropTypes.string.isRequired,
  kind: React.PropTypes.string,
};

export default Home;
