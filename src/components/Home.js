import React, { Component } from 'react';
import cardData from '../data/cardData.js';

class Home extends Component {  
   constructor(props, context) {
      super(props, context);

      this.getRandomCard = this.getRandomCard.bind(this);
      this.state = {
         name: 'Card',
         random: null
      };
  }
  componentDidMount() {
     console.log('Cards', this.props.Cards);
     this.getRandomCard();
    }
    
     getRandomCard(){
        console.log('get random card');
        let cards = this.props.Cards;
        let randNum = Math.floor(Math.random() * 77) + 1;
        let randCard = cards[randNum];
        let randName = randCard.name;
        console.log('card drawn',randCard);

        this.setState({random: randName}, function(){
          console.log(this.state);
        });
        
     }

     render(){
        return (
           <div className="main-content home">   
              <button onClick={ this.getRandomCard}>Random Card</button>
              <p>{this.state.random}</p>
           </div>
        )
     }
}

// PROPS 
Home.defaultProps = {
   name:'Card',
   kind: 'Child',
   Cards: cardData[0].Cards,
};

Home.propTypes = {
   name: React.PropTypes.string.isRequired,
   kind: React.PropTypes.string
}



export default Home;