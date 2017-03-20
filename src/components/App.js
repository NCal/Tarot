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
            <li><Navlink to="/SCR">Single Card Reading</Navlink></li>
            <li><Navlink to="/FullReading">Full Reading</Navlink></li>
           {/* <li><Navlink to="/courses">Courses</Navlink></li>*/}
          </ul>       
        </header>
        </div>
        <div className="right" style={{overflowY:'scroll'}}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;