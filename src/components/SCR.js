import React, { Component } from 'react';
import cardData from '../data/cardData.js';
import $ from 'jquery';

class SCR extends Component {   
    constructor(props, context) {
         super(props, context);

         this.getRandomCard = this.getRandomCard.bind(this);
         this.state = {
             name: 'Card',
             random_card_name: null,
             random_card_description: null,
             random_card_upright: null,
             random_card_reversed: null
         };
   }
   componentDidMount() {
       console.log('Cards', this.props.Cards);
      }
      
       getRandomCard() {
            console.group('get random card');
            let self = this;
            let cards = this.props.Cards;
            let randNum = Math.floor(Math.random() * 77) + 1;
            let randCard = cards[2];
            let randName = randCard.name;
            let randDes = randCard.description.basic;
            let randUpright = randCard.description.upright;
            let randReversed = randCard.description.reversed;
            let reading = $('.single_card_reading');
            console.log('card drawn',randCard);
            $('.description').innerHTML = randDes;
            
            reading.fadeOut('slow', function(){
               self.setState(
                  {
                     random_card_name: randName,
                     random_card_description: randDes,
                     random_card_upright: randUpright,
                     random_card_reversed: randReversed

                  }, function(){
                  console.log('random state:', this.state);
                  console.log( $('.description')[0].innerHTML);
                  this.replace_break();
               });
            });
            console.groupEnd();
            reading.fadeIn('slow');

       }
       replace_break(){
         console.log('replace break');
         let paras = document.getElementsByTagName('p');

         for (let i=0; i< paras.length; i++){
            let new_p = $('p')[i].innerHTML.replace(/\r?\n/g, '<br/>');
            $('p')[i].innerHTML = new_p;
         }
       }

       render(){
            return (
                <div className="main-content SCR">    
                     <button onClick={ this.getRandomCard}>Draw A Single Card</button>
                     <div style={{display: 'none'}} className="single_card_reading">
                        <h3>{this.state.random_card_name}</h3>
                        <p className="description">{this.state.random_card_description}</p>
                        <h3>Upright</h3>
                        <p className="upright_description">{this.state.random_card_upright}</p>
                        <h3>Reversed</h3>
                        <p className="upright_description">{this.state.random_card_reversed}</p>
                     </div>
                     
                </div>
            )
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