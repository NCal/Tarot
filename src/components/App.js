import React, { Component } from 'react';
import Navlink from './Navlink';

class App extends Component {   
    constructor(props, context) {
         super(props, context);

         this.state = {
           darkMode: true 
         };
   }

   changeMode = () => {
    console.log('change mode');
    this.setState({darkMode: !this.state.darkMode})
   }

   render = () => {
    console.log('props', this.props)
        return (
          <div
            className={`container ${
              this.state.darkMode ? "darkMode" : "lightMode"
            }`}
          >
            <div className="top"></div>
            <div className="left">
              <header>
                <ul className="main-nav">
                  <li>
                    <Navlink
                      to="/"
                      className={this.state.darkMode ? "darkMode" : "lightMode"}
                    >
                      Full Reading
                    </Navlink>
                  </li>
                  <li>
                    <Navlink
                      to="/single-card-reading"
                      className={this.state.darkMode ? "darkMode" : "lightMode"}
                    >
                      Single Card Reading
                    </Navlink>
                  </li>
                  <li>
                    <Navlink
                      to="/about"
                      className={this.state.darkMode ? "darkMode" : "lightMode"}
                    >
                      About
                    </Navlink>
                  </li>
                </ul>
              </header>
            </div>
            <div
              className={`center ${
                this.state.darkMode ? "darkMode" : "lightMode"
              }`}
            >
              {this.props.children}
            </div>
            <div className="right"></div>
            <div
              className="mode-btn"
              onClick={() => {
                this.changeMode();
              }}
            >
              <span className="material-symbols-outlined">wb_sunny</span>
            </div>
          </div>
        );
   }
}

export default App;