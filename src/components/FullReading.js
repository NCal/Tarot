import React, { Component } from 'react';
import cardData from '../data/cardData.js';
import $ from 'jquery';

class FullReading extends Component {   
    constructor(props, context) {
         super(props, context);

        this.getRandomCard = this.getRandomCard.bind(this);
        this.testFunc = this.testFunc.bind(this);
        const self = this;

         this.state = {
            chosen_cards: [],
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
      
  componentWillMount() {
    console.log('der card data',cardData[0].Cards);
    for (var i=0; i<cardData[0].Cards.length; i++ ){
       cardData[0].Cards[i].back = 'back.jpg';
    }

    console.log('cards after', cardData[0].Cards);
  }

  getRandomCard() {
     console.group('get random card');
     let flipped =   (Math.floor(Math.random() * 2) === 0) ? true : false;
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
     // $('.description').innerHTML = randDes;

     self.setState({chosen_cards: this.state.chosen_cards.push(randCard)});
     console.log('steert',self.state);
     
     // reading.hide();

     // self.setState(
     //    {
     //       new: false,
     //       loading: true,
     //       random_card_flipped: flipped,
     //       random_card_name: randName,
     //       random_card_keys_up: randKeysUp,
     //       random_card_keys_rev: randKeysRev,
     //       random_card_description: randDes,
     //       random_card_upright: randUpright,
     //       random_card_reversed: randReversed,
     //       random_card_src: src

     //    }, function(){
     //    setTimeout(function(){
     //       self.setState({loading: false}, function(){
     //          if (this.state.random_card_flipped){
     //             $('img').addClass('card_image_reversed');
     //          } else {
     //             $('img.card_image').removeClass('card_image_reversed');
     //          }
     //          reading.show();
     //       });
     //       self.replace_break(paras);
     //    },2000);
     // });
     console.groupEnd();
  }

  testFunc(){
    console.log('test');
  }

   replace_break(paras) {
       console.log('replace break');
       for (let i = 0; i < paras.length; i++) {
           let new_p = paras[i].innerHTML.replace(/\r?\n/g, '<br/>');
           paras[i].innerHTML = new_p;
       }
   }
   render(){
      return (
          <div className="main-content SCR">    
               {/*<button onClick={ this.getRandomCard}>Draw A Card</button>*/}
               <div className="cards">
                {cardData[0].Cards.map(function(card, i){
                  return <img className="full_card" key={i} src={'assets/tarot/'+card.back} style={{width: '71px', margin: '2px'}} onClick={self.testFunc}></img>
                })} 

               </div>
               <div className="reading_container">
               </div>
          </div>
      )
   }        
}

// PROPS 
FullReading.defaultProps = {
    name:'Card',
    kind: 'Child',
    Cards: cardData[0].Cards,
};

FullReading.propTypes = {
    name: React.PropTypes.string.isRequired,
    kind: React.PropTypes.string
}


export default FullReading;