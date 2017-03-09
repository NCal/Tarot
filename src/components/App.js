import React, { Component } from 'react';
import Navlink from './Navlink';

class App extends Component {
  render() {
    return (
      <div className="container">
      <div className="left">
      <header>
        <ul className="main-nav">
          <li><Navlink to="/">Home</Navlink></li>
          <li><Navlink to="/about">About</Navlink></li>
          <li><Navlink to="/teachers">Teachers</Navlink></li>
          <li><Navlink to="/courses">Courses</Navlink></li>
        </ul>       
      </header>
      </div>
      <div className="right">
      {this.props.children}
      </div>
      </div>
    );
  }
}

export default App;