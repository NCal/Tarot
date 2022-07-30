import React, { Component } from 'react';
import Navlink from './Navlink';
import TitleBar from './TitleBar';

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
            <TitleBar />
            <div
              className={`top ${
                this.state.darkMode ? "darkMode" : "lightMode"
              }`}
            >
              <div
                className={`icon_strip ${
                  this.state.darkMode ? "iconDarkMode" : "iconLightMode"
                }`}
              ></div>
              <script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6248178765033726"
                crossOrigin="anonymous"
              ></script>
              {/* <!-- horizontal-top --> */}
              <ins
                className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-6248178765033726"
                data-ad-slot="9286392459"
                data-ad-format="auto"
                data-full-width-responsive="true"
              ></ins>
              <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
              </script>
            </div>
            <div className="left">
              <header>
                <ul className="main-nav">
                  <li>
                    <Navlink
                      to="/"
                      className={this.state.darkMode ? "darkMode" : "lightMode"}
                    >
                      <span className="material-symbols-outlined">
                        auto_awesome
                      </span>
                      &nbsp; Tarot.lol
                    </Navlink>
                  </li>
                  <li>
                    <Navlink
                      to="/instructions"
                      className={this.state.darkMode ? "darkMode" : "lightMode"}
                    >
                      Instructions
                    </Navlink>
                  </li>
                  <li>
                    <Navlink
                      to="/full-reading"
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
                  {/* <li>
                    <Navlink
                      to="/about"
                      className={this.state.darkMode ? "darkMode" : "lightMode"}
                    >
                      About
                    </Navlink>
                  </li> */}
                  <li>
                    <Navlink
                      to="/links"
                      className={this.state.darkMode ? "darkMode" : "lightMode"}
                    >
                      Links
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
            <div className="right">
              <script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6248178765033726"
                crossOrigin="anonymous"
              ></script>
              {/* <!-- rail-long --> */}
              <ins
                className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-6248178765033726"
                data-ad-slot="1190897128"
                data-ad-format="auto"
                data-full-width-responsive="true"
              ></ins>
              <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
              </script>
              <Navlink
                to="/links"
                // className={this.state.darkMode ? "darkMode" : "lightMode"}
              >
                <ul className="learnSection">
                  <li>Learn More</li>
                </ul>
              </Navlink>
            </div>
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