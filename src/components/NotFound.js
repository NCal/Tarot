import React, {Component} from 'react';

class NotFound extends Component {
    constructor(props, context) {
      super(props, context);
   }

   componentDidMount(){
    document.title = "Not Found, 404"
   }

  render(){
    return (<div className="main-content not-found">
    <i className="material-icons icn-error">error_outline</i>
    <h2>Page Not Found</h2>
  </div>)
  }
}

export default NotFound;