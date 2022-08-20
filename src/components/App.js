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

  componentDidMount=()=>{

    const leaderboard = document.createElement("script");  
    const square = document.createElement("script");  
    const footerBanner = document.createElement("script");  

    footerBanner.setAttribute("data-cfasync", "false");
    footerBanner.type = "text/javascript";
    footerBanner.src = "//p449766.clksite.com/adServe/banners?tid=449766_880472_4";

    square.setAttribute("data-cfasync", "false");
    square.type="text/javascript"
    square.src="//p449766.clksite.com/adServe/banners?tid=449766_880472_0"
    // square.src = "//pulseadnetwork.com/a/display.php?r=6179130";

    leaderboard.type="text/javascript";
    leaderboard.setAttribute("data-cfasync", "false");
    leaderboard.src="//p449766.clksite.com/adServe/banners?tid=449766_880472_3";
 
    console.log('this.center', this.center);  
    console.log('this.right', this.right)
    this.topAd.prepend(leaderboard);  
    this.bottomAd.appendChild(footerBanner);  
    this.right.appendChild(square);
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
              <div className="topAd" ref={(el) => (this.topAd = el)}></div>
              {this.props.children}
              <div className="bottomAd" ref={(el) => (this.bottomAd = el)}></div>
            </div>
            <div className="right" ref={(el) => (this.right = el)}>
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
                given situation for a true analysis of any circumstance.
              </p>

              {/* <!-- rail-long --> */}
              {/* <ins
                className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-6248178765033726"
                data-ad-slot="1190897128"
                data-ad-format="auto"
                data-full-width-responsive="true"
              ></ins>
              <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
              </script> */}
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