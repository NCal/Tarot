import React, {Component} from 'react';

const About = (props) => {
    return (
      <div className="main-content">
      <h2 className='title'>About</h2>
        <p>The idea for Tarot.lol is very simple.</p>
        <img
          className="card_image"
          src={
            " https://raw.githubusercontent.com/NCal/Tarot/master/assets/Tarot/23_Wands02.jpg"
          }
          alt=""
        />
        <p>
          Say you didn't have access to a deck of tarot cards, but were
          still able to consult the tarot as long as there was a computer,
          tablet or smart-phone nearby.
        </p>
        {/* <div
          className="break-image"
          style={{
            backgroundImage:
              "url(https://raw.githubusercontent.com/NCal/Tarot/ads/assets/tarot_icons_m/2.png)",
          }}
        ></div> */}
        <img
          className="break-image"
          src={
            " https://raw.githubusercontent.com/NCal/Tarot/ads/assets/tarot_icons_m/2.png"
          }
          alt=""
        />
        <p>I decided to build a simple app that did just that.</p>
        <p>
          With this app anyone can get a complete tarot reading with in-depth
          situational alaysis in seconds.
        </p>
        <p>
          No matter one's feelings about the capacity of Tarot to solve any
          problems, the advice within the readings is often universal - and due
          the the sheer amount of card combinations, whether you choose to do a reading once a month or every day, the readings are
          always interesting.
        </p>
        {/* <p>App by <a href="http://www.nbroaddus.com">N Broaddus </a></p> */}
      </div>
    );
}

export default About;