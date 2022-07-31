import React, { Component } from 'react';
import cardData from '../data/cardData.js';
import $ from 'jquery';

class SCR extends Component {   
    constructor(props, context) {
         super(props, context);

         this.state = {
            new: true,
            loading: false,
            name: 'Card',
            src: null,
            random_card_flipped: null,
            random_card_name: null,
            random_card_description: null,
            random_card_upright: null,
            random_card_reversed: null
         };
   }

   back = () => {
    this.setState({

            new: true,
            loading: false,
            name: 'Card',
            src: null,
            random_card_flipped: null,
            random_card_name: null,
            random_card_description: null,
            random_card_upright: null,
            random_card_reversed: null

    })
   }
      
   getRandomCard = () => {
      console.group('get random card');
      let flipped =   Math.floor(Math.random() * 2) === 0 ? true : false;
      let self = this;
      let cards = this.props.Cards;
      let randNum = Math.floor(Math.random() * (78 - 0 + 1));
      let randCard = cards[randNum];
      let randName = randCard.name;
      let randKeysUp  = randCard.keywords.upright;
      let randKeysRev  = randCard.keywords.reversed;
      let src = randCard.src;
      let randDes = randCard.description.basic;
      let randUpright = randCard.description.upright;
      let randReversed = randCard.description.reversed;
      let reading = $('.reading_container');
      let paras = document.getElementsByTagName('p');
      console.log('card drawn',randCard);
      $('.description').innerHTML = randDes;
      
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
            random_card_src: src

         }, function(){
         setTimeout(function(){
            self.setState({loading: false}, function(){
               if (this.state.random_card_flipped){
                  $("img.card_image").addClass("card_image_reversed");
               } else {
                  $('img.card_image').removeClass('card_image_reversed');
               }
               reading.show();
            });
            self.replace_break(paras);
         },2000);
      });
      console.groupEnd();
   }

   replace_break = (paras) => {
       console.log('replace break');
       for (let i = 0; i < paras.length; i++) {
           let new_p = paras[i].innerHTML.replace(/\r?\n/g, '<br/>');
           paras[i].innerHTML = new_p;
       }
   }
   render = () => { 
   if (this.state.loading){
      return (
        <div className="main-content SCR">
          <br />
          <div className="main-content ">
            <img
              className="pentacle"
              src="https://upload.wikimedia.org/wikipedia/commons/9/97/Pentacle_2.svg"
            />
          </div>
        </div>
      );
   }
   if (this.state.new && !this.state.loading){
      return (
        <div className="main-content SCR">
          <br />
          <h2 className="title">Single Card Reading</h2>
          <p>
            The single card reading is a short reading resulting from drawing
            one card.
          </p>
          <button onClick={this.getRandomCard}>Draw A Single Card</button>
          <br />
          <br />
          <img
            onClick={this.getRandomCard}
            className="sevenCards"
            src={" https://s3.amazonaws.com/tarot.lol/assets/seven_small.jpg"}
            alt=""
          />
          <div className="reading_container"></div>
          <img
            className="break-image"
            src={"https://s3.amazonaws.com/tarot.lol/assets/2.png"}
            alt=""
          />
        </div>
      );
   }
   if (!this.state.random_card_flipped && !this.state.loading && !this.state.new){
      return (
        <div className="main-content SCR">
          <br />
          <button style={{ float: "right" }} onClick={this.back}>
            Back
          </button>
          <div className="reading_container">
            <div className="single_card_reading" style={{borderBottom: 'none'}}>
              <h2 className="title">{this.state.random_card_name}</h2>
              <img
                className="card_image"
                src={this.state.random_card_src}
                alt=""
              />
              <h4 className="title">Keywords:</h4>
              <p>{this.state.random_card_keys_up}</p>
              <h3 className="title">Summary</h3>
              <p className="description">
                {this.state.random_card_description}
              </p>
              <h3 className="title">Upright</h3>
              <p className="upright_description">
                {this.state.random_card_upright}
              </p>
            </div>
          </div>
          <img
            className="break-image"
            src={"https://s3.amazonaws.com/tarot.lol/assets/2.png"}
            alt=""
          />
        </div>
      );
   }  if (this.state.random_card_flipped && !this.state.loading && !this.state.new) {
      return (
        <div className="main-content SCR">
          <br />
          <button style={{ float: "right" }} onClick={this.back}>
            Back
          </button>
          <div className="reading_container">
            <div
              className="single_card_reading"
              style={{ borderBottom: "none" }}
            >
              <h2 className="title">
                {this.state.random_card_name + " Reversed"}
              </h2>
              <img
                className="card_image"
                src={this.state.random_card_src}
                alt=""
              />
              <h4 className="title">Keywords:</h4>
              <p>{this.state.random_card_keys_rev}</p>
              <h3 className="title">Summary</h3>
              <p className="description">
                {this.state.random_card_description}
              </p>
              <h3 className="title">Reversed</h3>
              <p className="upright_description">
                {this.state.random_card_reversed}
              </p>
            </div>
          </div>
          <img
            className="break-image"
            src={"https://s3.amazonaws.com/tarot.lol/assets/2.png"}
            alt=""
          />
        </div>
      );
      }   
   }        
}

// PROPS 
SCR.defaultProps = {
    name:'Card',
    kind: 'Child',
    Cards: cardData[0].Cards,
};

SCR.propTypes = {
    name: React.PropTypes.string.isRequired,
    kind: React.PropTypes.string
}

export default SCR;