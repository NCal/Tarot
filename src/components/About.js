import React, {Component} from 'react';

class About extends Component {
  render() {
    return (
      <div className="main-content">
        <h2>{this.props.route.title}</h2>
        <p><a href="https://en.wikipedia.org/wiki/Tarot#Occult_tarot_decks">Tarot cards</a> are one of many forms of divination. They are commonly used to measure potential outcomes and evaluate influences surrounding a person, event, or both.</p> <p>The Full Reading section uses the <a href="http://www.tarotpedia.com/wiki/Celtic_Cross_Spread">Celtic Cross</a> Spread. The Deck used is the <a href="https://en.wikipedia.org/wiki/Rider-Waite_tarot_deck">Rider Waite.</a></p>
        <p>All descriptions and readings are taken from <a href="https://www.biddytarot.com">Biddy Tarot</a> © 2017 Biddy Tarot.</p>
        <p>App by <a href="http://www.nbroaddus.com">Nathan Broaddus </a>© 2017</p>
      </div>
    );
  }
}

export default About;