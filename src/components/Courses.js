import React, {Component} from 'react';
import Navlink from './Navlink';

class Courses extends Component {
  render() {
    return (
      <div className="main-content courses">
        <div className="course-header group">
          <h2>Courses</h2> 
          <ul className="course-nav">
            <li><Navlink to="/courses/html">HTML</Navlink></li>
            <li><Navlink to="/courses/css">CSS</Navlink></li>
            <li><Navlink to="/courses/javascript">JavaScript</Navlink></li>
          </ul>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Courses;