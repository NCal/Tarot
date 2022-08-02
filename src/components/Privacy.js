import React, {Component} from 'react';

class Privacy extends Component {
    constructor(props, context) {
      super(props, context);
   }

   componentDidMount(){
    document.title = "Privacy"
   }

  render(){
    return (
      <div className="main-content">
        <div
          className="reading_container"
          style={{ borderBottom: "1px solid #555", paddingBottom: "20px" }}
        >
          <br />
          <h2 className="title">Privacy & Cookies</h2>
          <img
            className="card_image"
            src={"https://s3.amazonaws.com/tarot.lol/assets/23_Wands02.jpg"}
            alt="Privacy page image, Two of Wands Tarot Card"
          />
          <p>
            We use technologies, such as cookies, to customise content and
            advertising, to provide social media features and to analyze traffic
            to the site. We also share information about your use of our site
            with our trusted social media, advertising and analytics partners.
          </p>
          <p>
            We use third-party advertising companies to serve ads when you visit
            our website. These companies may use information about your visits
            to this and other websites in order to provide advertisements about
            goods and services of interest to you.
          </p>
          <p>
            If you would like more information about this practice and to know
            your choices about not having this information used by these
            companies, read{" "}
            <a
              href="https://policies.google.com/technologies/partner-sites?hl=en"
              target="-blank"
            >
              How Google uses information from sites or apps that use Google
              services
            </a>
            . We, at Tarot.lol and our advertising partners collect personal
            information (such as the cookies stored on your browser, or the IP
            address of your device) when you visit our site. We, and our
            partners, use this information to tailor and deliver ads to you on
            our site, or to help tailor ads to you when you visit others' sites.
            To tailor ads that may be more relevant to you, we and/or our
            partners may share the information we collect with third parties.
          </p>
          <p>
            Note that although we will not sell your personal information we
            will continue to share some personal information with our partners
            (who will function as our service providers in such instance) to
            help us perform advertising-related functions such as, but not
            limited to, measuring the effectiveness of our ads, managing how
            many times you may see an ad, reporting on the performance of our
            ads, ensuring services are working correctly and securely, providing
            aggregate statistics and analytics, improving when and where you may
            see ads and/or reducing ad fraud.
          </p>
        </div>
        <img
          className="break-image"
          src={" https://s3.amazonaws.com/tarot.lol/assets/2.png"}
          alt="Two interwoven rings, a design element denoting the end of page content"
        />
      </div>
    );
}
}

export default Privacy;