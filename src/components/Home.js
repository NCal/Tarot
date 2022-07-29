import React, { Component } from "react";
import cardData from "../data/cardData.js";
import $ from "jquery";

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
        <div className="main-content SCR">
          <h2 className="title">
            {/* <span className="material-symbols-outlined">
                  sentiment_satisfied
                </span> */}
            Tarot.lol 🔮
          </h2>
          {/* <button onClick={this.getRandomCard}>Draw A Single Card</button> */}
          <div className="reading_container">
            <div className="single_card_reading">
              <img
                className="card_image"
                src={this.state.random_card_src}
                alt=""
              />
              {/* <h4 className="title">Keywords:</h4>
              <p>{this.state.random_card_keys_rev}</p> */}
              <p className="title">
                The tarot is a pack of playing cards used from at least the
                mid-15th century.
                <br />
              </p>
              <p>Tarot cards are one of many forms of divination.</p>
              <p>
                They are commonly used to measure potential outcomes and
                evaluate influences surrounding a person, event, or both.
              </p>
              <p className="description">
                The Full Reading section uses the Celtic Cross layout.
                {/* The deck used is the Rider Waite. */}
                {/* {this.state.random_card_description} */}
              </p>

              <p>
                {/* This well known 10 card tarot spread is flexible while also
                providing comprehensive answers to so many questions and topics.
                <br /> <br />
                It is also one of the rare tarot spreads that you can use even
                when you don’t have a particular question to ask.
                <br /> <br /> */}
                Using this layout, one can examine all the different aspects of
                a given situation for a true analysis of any event.
              </p>
              {/* <p>© 2022 tarot.lol</p> */}
              {/* <h3 className="title">Reversed</h3> */}
              {/* <p className="upright_description">
                {this.state.random_card_reversed}
              </p> */}
            </div>
          </div>
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
