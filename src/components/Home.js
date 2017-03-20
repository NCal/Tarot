import React, {Component} from 'react';

class Home extends Component {
  render() {
    return (
      <div className="main-content">
        <h2>{this.props.route.title}</h2>
        <p>Tarot cards are one of many forms of divination. They are commonly used to measure potential outcomes and evaluate influences surrounding a person, event, or both.</p>
      </div>
    );
  }
}

export default Home;