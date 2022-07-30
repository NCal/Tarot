import React, { Component } from 'react';
import cardData from '../data/cardData.js';
import $ from 'jquery';
let chosen_cards = [];
let globalCards = cardData[0].Cards.slice();
let cardAmount = 78;

class FullReading extends Component {   
   constructor(props, context) {
   super(props, context);
   const self = this;

   this.state = {
      new: true,
      loading: false,
      reading: false,
      name: 'Card',
      src: null,
      random_card_flipped: null,
      random_card_name: null,
      random_card_description: null,
      random_card_upright: null,
      random_card_reversed: null
   };
}

   componentWillMount = () => {
      console.log('COMP WILL MOUNT', this.props);
      chosen_cards = [];
      console.log('global cards',globalCards);
      // Add back to cards
      for (let i=0; i<cardData[0].Cards.length; i++ ){
         cardData[0].Cards[i].back =
           "https://s3.amazonaws.com/tarot.lol/assets/back_sm.jpg";
      }
   };

  getRandomCard = (e) => {
      console.group('get random card');
      let flipped =   Math.floor(Math.random() * 2) === 0 ? true : false;
      let self = this;
      let cards = globalCards;
      let randNum = Math.floor(Math.random() * (cardAmount - 0 + 1));
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
      console.log('flipped', flipped);
      
      if (flipped){
         randCard.reversed = true;
      }
      console.log('card drawn',randCard);
      console.log('randNum', randNum);


      chosen_cards.push(randCard);
      cards.splice(randNum, 1);
      console.log('cards left:',cards);
      cardAmount --;
      console.log('card amount',cardAmount);
      console.log(chosen_cards);

      if (chosen_cards.length >= 10){
         self.add_info();
         self.setState({loading: true}, function(){
            setTimeout(function(){

               self.setState({
                  loading: false,
                  reading: true
               });
               globalCards = cardData[0].Cards.slice();
               cardAmount = 78;
               self.replace_break(paras);
               
               console.log(globalCards);
            },2000);
         });
      }

      let clickedCard = e.target;
      $(clickedCard).addClass('selected');
      console.groupEnd();
  }

   replace_break = (paras) => {
      console.log('replace break');
      for (let i = 0; i < paras.length; i++) {
         let new_p = paras[i].innerHTML.replace(/\r?\n/g, '<br/>');
         paras[i].innerHTML = new_p;
      }
   }

   add_info = () => {
      console.log('add info');
      for (let i = 0; i < chosen_cards.length; i++) {
         chosen_cards[0].type = "Card 1: The Present";
         chosen_cards[1].type = "Card 2: The Challenge";
         chosen_cards[2].type = "Card 3: The Past";
         chosen_cards[3].type = "Card 4: The Future";
         chosen_cards[4].type = "Card 5: Above (Best Outcome)";
         chosen_cards[5].type = "Card 6: Below (The Subconscious)";
         chosen_cards[6].type = "Card 7: Advice";
         chosen_cards[7].type = "Card 8: External Influences";
         chosen_cards[8].type = "Card 9: Hopes and Fears";
         chosen_cards[9].type = "Card 10: Outcome";
      }
   }

   back = () => {
      console.log('back');
      this.setState({
         loading: false,
         reading: false
      });
      chosen_cards = [];
   }

   render = () => {
    if (!this.state.loading && !this.state.reading){
         return (
           <div className="main-content ">
             <br />
             <h2 className="title">Full Reading</h2>

             <div
               className="cards"
               style={{ borderBottom: "1px solid #555", paddingBottom: "20px" }}
             >
             <p>The full reading is more in-depth. <br/><br/>The reading returns 10 sections which correspond directly to the question at hand.</p>
               <p>Select 10 cards:</p>
               {cardData[0].Cards.map(
                 function (card, i) {
                   return (
                     <img
                       className="full_card"
                       key={"card" + i}
                       src={card.back}
                       onClick={this.getRandomCard}
                     />
                   );
                 }.bind(this)
               )}
             </div>
             <img
               className="break-image"
               src={"https://s3.amazonaws.com/tarot.lol/assets/2.png"}
               alt=""
             />
             <div className="reading_container"></div>
           </div>
         );
      }
    if (this.state.loading){
      return (
        <div className="main-content ">
          <br />
          <img
            className="pentacle"
            src="https://upload.wikimedia.org/wikipedia/commons/9/97/Pentacle_2.svg"
          />
        </div>
      );
    }
    if (this.state.reading) {
      return (
        <div className="main-content ">
          <br />
          <div className="reading_container">
            <button className="back-button" onClick={this.back}>
              Back
            </button>
            {chosen_cards.map(function (card, i) {
              if (!card.reversed) {
                return (
                  <div key={i} className="fcr_container">
                    <div className="single_card_reading">
                      <h2 className="type">{card.type}</h2>
                      <h3 className="title">{card.name}</h3>
                      <img className="card_image" src={card.src} alt="" />
                      <h4 className="title">Keywords:</h4>
                      <p>{card.keywords.upright}</p>
                      <h3 className="title">Summary</h3>
                      <p className="description">{card.description.basic}</p>
                      <h3 className="title">Upright</h3>
                      <p className="upright_description">
                        {card.description.upright}
                      </p>
                    </div>
                    <br />
                  </div>
                );
              } else {
                return (
                  <div key={i} className="fcr_container">
                    <div className="single_card_reading">
                      <h2 className="type">{card.type}</h2>
                      <h3 className="title">{card.name + " Reversed"}</h3>
                      <img
                        className="card_image card_image_reversed"
                        src={card.src}
                        alt=""
                      />
                      <h4 className="title">Keywords:</h4>
                      <p>{card.keywords.reversed}</p>
                      <h3 className="title">Summary</h3>
                      <p className="description">{card.description.basic}</p>
                      <h3 className="title">Reversed</h3>
                      <p className="upright_description">
                        {card.description.reversed}
                      </p>
                    </div>
                    <br />
                  </div>
                );
              }
            })}
            <button onClick={this.back}>Back</button>
          </div>
        </div>
      );
   }      
   }
}

// PROPS 
FullReading.defaultProps = {
    chosen_cards: [],
    name:'Card',
    kind: 'Child',
    Cards: globalCards,
};

FullReading.propTypes = {
    name: React.PropTypes.string.isRequired,
    kind: React.PropTypes.string
}


export default FullReading;