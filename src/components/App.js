import React, { Component } from 'react';
import Navlink from './Navlink';
import TitleBar from './TitleBar';
import Pent from './Pent'
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
                  <li style={{ display: "inline-block" }}>
                    <Navlink
                      to="/"
                      className={this.state.darkMode ? "darkMode" : "lightMode"}
                    >
                      &nbsp;
                      <span style={{ display: "inline-block" }}>Tarot.lol</span>
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
                  <li>
                    <Navlink
                      to="/links"
                      className={this.state.darkMode ? "darkMode" : "lightMode"}
                    >
                      Learn More
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
              <p className="">
                The tarot is a pack of playing cards that's been used since at
                least the mid-15th century.
              </p>
              {/* <br /> */}
              <p>Tarot cards are one of many forms of divination.</p>
              <p>
                They are commonly used to measure potential outcomes and
                evaluate influences surrounding a person, event, or both.
              </p>
              <p>
                Using Tarot cards one can examine all the different aspects of a
                given situation for a true analysis of any event.
              </p>
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
                className="learnSection"
                to="/links"
                // className={this.state.darkMode ? "darkMode" : "lightMode"}
              >
                <ul>
                  <li>Learn More</li>
                  <Pent className={"lower-pent"} />
                </ul>
              </Navlink>
            </div>
            {/* <div
              className="mode-btn"
              onClick={() => {
                this.changeMode();
              }}
            > 
              <span className="material-symbols-outlined">wb_sunny</span>
            </div>
            */}
          </div>
        );
   }
}

export default App;