import React, { Component } from "react";

class Modal extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    // document.title = "Learn More";
  }
  render() {
    return (
      <div className="modal-container">
        {/* <p> */}
          This website uses cookies to ensure you get the best experience on our
          website. If you continue to use this site we will assume that you are
          happy with it. If you need more information check out 'Cookies usage'
        {/* </p> */}
      </div>
    );
  }
}

export default Modal;
