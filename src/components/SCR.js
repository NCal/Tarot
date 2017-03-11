import React, { Component } from 'react';
import cardData from '../data/cardData.js';
import $ from 'jquery';

class SCR extends Component {   
    constructor(props, context) {
         super(props, context);

         this.getRandomCard = this.getRandomCard.bind(this);
         this.state = {
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
   componentDidMount() {
       // console.log('Cards', this.props.Cards);

      }
      
       getRandomCard() {
            console.group('get random card');
            let flipped =   (Math.floor(Math.random() * 2) == 0) ? true : false;
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
            console.log('card drawn',randCard);
            $('.description').innerHTML = randDes;
            
            reading.fadeOut('slow', function(){
               self.setState(
                  {
                     
                     random_card_flipped: flipped,
                     random_card_name: randName,
                     random_card_keys_up: randKeysUp,
                     random_card_keys_rev: randKeysRev,
                     random_card_description: randDes,
                     random_card_upright: randUpright,
                     random_card_reversed: randReversed,
                     random_card_src: src

                  }, function(){
                  this.replace_break();

                  if (this.state.random_card_flipped){
                     $('.card_image').addClass('card_image_reversed');
                  } else {
                     $('.card_image').removeClass('card_image_reversed');
                  }
                  
                  setTimeout(function(){
                     self.setState({loading: false});
                  },2000);
                  reading.fadeIn('slow');
               });
            });
            console.groupEnd();
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
         if (this.state.loading){
            return (
               <div className="main-content SCR">   
            <div>ass</div> 
               <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                 <defs>
                   <filter id="goo">
                     <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                     <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -10" result="goo" />
                     <feBlend in="SourceGraphic" in2="goo" operator="atop" />
                   </filter>
                 </defs>
               </svg>
               <div className="loader">
                 <div></div>
                 <div></div>
                 <div></div>
                 <div></div>
                 <div></div>
               </div>
            </div>
               )
            
         }
         if (!this.state.random_card_flipped && !this.state.loading){
            return (
                <div className="main-content SCR">    
                     <button onClick={ this.getRandomCard}>Draw A Single Card</button>
                     <div className="reading_container">
                     <img className="card_image" style={{float: 'right'}} src={'assets/tarot/'+this.state.random_card_src} alt=""/>
                     <div  className="single_card_reading">
                        <h3 className="title">{this.state.random_card_name}</h3>
                        <h4 className="title">Keywords:</h4>
                        <p>{this.state.random_card_keys_up}</p>
                        <h3 className="title">Summary</h3>
                        <p className="description">{this.state.random_card_description}</p>
                        <h3 className="title">Upright</h3>
                        <p className="upright_description">{this.state.random_card_upright}</p>
                     </div>
                     </div>
                </div>
            )
         }  if (this.state.random_card_flipped && !this.state.loading) {
            return (
                <div className="main-content SCR">    
                     <button onClick={ this.getRandomCard}>Draw A Single Card</button>
                     <div className="reading_container">
                        <img className="card_image" style={{float: 'right'}} src={'assets/tarot/'+this.state.random_card_src} alt=""/>
                        <div  className="single_card_reading">
                           <h3 className="title">{this.state.random_card_name +' Reversed'}</h3>
                           <h4 className="title">Keywords:</h4>
                           <p>{this.state.random_card_keys_rev}</p>
                           <h3 className="title">Summary</h3>
                           <p className="description">{this.state.random_card_description}</p>
                           <h3 className="title">Reversed</h3>
                           <p className="upright_description">{this.state.random_card_reversed}</p>
                        </div>
                     </div>
                </div>
            )
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