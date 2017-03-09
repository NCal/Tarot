import React from 'react';

const Featured = props => {  
   console.log(props);
  return (
    <div className="main-content">
      <h2>Featured: </h2>
      <p>Introducing <strong>{props.params.topic} </strong>, a teacher who loves teaching courses about <strong> {props.params.name}</strong>!</p>
    </div>
  );
}

export default Featured;