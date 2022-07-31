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
                The tarot is a pack of playing cards that's been used since at least the
                mid-15th century.
              </p>
              {/* <br /> */}
              <p>Tarot cards are one of many forms of divination.</p>
              <p>
                They are commonly used to measure potential outcomes and
                evaluate influences surrounding a person, event, or both.
              </p>
              <p>
                Using Tarot cards one can examine all the different aspects of a given situation
                for a true analysis of any event.
              </p>
              {/* <p>The thought behind Tarot.lol is simple.</p>

              <p>
                With this site anyone can get a complete tarot reading with
                in-depth situational alaysis in seconds.
              </p>

              <p>
                Say you don't have access to a deck of cards, but still want to
                able to consult the tarot. As long as there is a computer,
                tablet, or smart-phone nearby, you can.
              </p>
              <p>
                The advice within the readings is often universal - and due the
                the sheer amount of card combinations, whether you choose to do
                a reading once a month or every day, the readings are always
                interesting.
              </p> */}
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
                to="/privacy"
                // className={this.state.darkMode ? "darkMode" : "lightMode"}
              >
                <ul className="learnSection">
                  <li>Privacy & Cookies</li>
                  <Pent />
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