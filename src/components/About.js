import React, {Component} from 'react';

const About = (props) => {
    return (
      <div className="main-content">
        <h2 className="title">About</h2>
        <p>The thought behind Tarot.lol is simple.</p>
        <img
          className="card_image"
          src={
            " https://raw.githubusercontent.com/NCal/Tarot/master/assets/Tarot/23_Wands02.jpg"
          }
          alt=""
        />
        <p>
          Say you don't have access to a deck of cards, but still want to able
          to consult the tarot. As long as there is a computer, tablet, or
          smart-phone nearby, you can.
        </p>
        <p>
          With this app anyone can get a complete tarot reading with in-depth
          situational alaysis in seconds.
        </p>
        <p>
          No matter one's feelings about the capacity of Tarot to solve any
          problems, the advice within the readings is often universal - and due
          the the sheer amount of card combinations, whether you choose to do a
          reading once a month or every day, the readings are always
          interesting.
        </p>
        <img
          className="break-image"
          src={
            " https://raw.githubusercontent.com/NCal/Tarot/ads/assets/tarot_icons_m/2.png"
          }
          alt=""
        />
        {/* <p>App by <a href="http://www.nbroaddus.com">N Broaddus </a></p> */}
      </div>
    );
}

export default About;