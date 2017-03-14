import React, { Component } from 'react';
import cardData from '../data/cardData.js';
import $ from 'jquery';
let chosen_cards = [];

class FullReading extends Component {   
    constructor(props, context) {
         super(props, context);
        const self = this;
        
        this.getRandomCard = this.getRandomCard.bind(this);
        this.testFunc = this.testFunc.bind(this);
      

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
      
  componentWillMount() {
    chosen_cards = [];
    console.log('der card data',cardData[0].Cards);
    for (var i=0; i<cardData[0].Cards.length; i++ ){
       cardData[0].Cards[i].back = 'back.jpg';
    }

    console.log('cards after', cardData[0].Cards);
  }

  getRandomCard(e) {
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

     if (flipped){
      randCard.reversed = true;
     }
     console.log('card drawn',randCard);
     // $('.description').innerHTML = randDes;

    chosen_cards.push(randCard);
    console.log(chosen_cards);

    if (chosen_cards.length >= 10){
      self.setState({loading: true}, function(){
        setTimeout(function(){
          self.setState({
            loading: false,
            reading: true
          });

           self.replace_break(paras);
        },2000);
      });
    }

     let clickedCard = e.target;
     // console.log($(clickedCard)[0]);
     $(clickedCard).addClass('selected');

     // self.setState({chosen_cards: this.state.chosen_cards.push(randCard)});
     // console.log('steert',self.state);
     
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
    if (!this.state.loading && !this.state.reading){
         return (
             <div className="main-content ">    
                  {/*<button onClick={ this.getRandomCard}>Draw A Card</button>*/}
                  <div className="cards">
                   {cardData[0].Cards.map(function(card, i){
                     return (<img className="full_card" key={'card'+i} src={'assets/tarot/'+card.back} style={{width: '71px', margin: '2px'}} onClick={this.getRandomCard}/>)
                   }.bind(this))
                  
                 } 
                  </div>
                  <div className="reading_container">
                  </div>
             </div>
         )
      }
    if (this.state.loading){
      return (
        <div className="main-content ">   
           <div>
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
        </div>
      )
    }
    if (this.state.reading) {
      return (
        <div className="main-content " style={{overflowY: 'scroll'}}>    
               <div className="reading_container">
               {
                chosen_cards.map(function(card, i){
                  if (!card.reversed){
                       return (
                     <div key={i} className="fcr_container"><img className="card_image" style={{float: 'right'}} src={'assets/tarot/'+card.src} alt=""/>
                       <div  className="single_card_reading">
                         <h3 className="title">{card.name}</h3>
                         <h4 className="title">Keywords:</h4>
                         <p>{card.keywords.upright}</p>
                         <h3 className="title">Summary</h3>
                         <p className="description">{card.description.basic}</p>
                         <h3 className="title">Upright</h3>
                         <p className="upright_description">{card.description.upright}</p>
                      </div>
                      <br/>
                    </div>)
                  } else {
                       return (
                     <div key={i} className="fcr_container"><img className="card_image card_image_reversed" style={{float: 'right'}} src={'assets/tarot/'+card.src} alt=""/>
                       <div  className="single_card_reading">
                         <h3 className="title">{card.name+ ' Reversed'}</h3>
                         <h4 className="title">Keywords:</h4>
                         <p>{card.keywords.reversed}</p>
                         <h3 className="title">Summary</h3>
                         <p className="description">{card.description.basic}</p>
                         <h3 className="title">Reversed</h3>
                         <p className="upright_description">{card.description.reversed}</p>
                      </div>
                      <br/>
                    </div>)
                  }
                })
               }
               
               </div>
          </div>
      )

    }      
    }
}

// PROPS 
FullReading.defaultProps = {
    chosen_cards: [],
    name:'Card',
    kind: 'Child',
    Cards: cardData[0].Cards,
};

FullReading.propTypes = {
    name: React.PropTypes.string.isRequired,
    kind: React.PropTypes.string
}


export default FullReading;