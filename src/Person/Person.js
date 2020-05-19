import React from "react";
// import Radium from 'radium';

import "./Person.css";

const person = (props) => {
  // let mediaStyleOnCard = {
  //   '@media (min-length : 500px)' : {
  //     width: "450px"
  //   }
  // }

  return (
    <div
      className="person"
      // style={mediaStyleOnCard}
      onClick={props.deletePersonClick}
    >
      <h3 className={props.heading3Class.join(" ")}>
        Hello Everyone, I am {props.name} and My Age is {props.age}
      </h3>
      <input type="text" onChange={props.changeName} value={props.name} />
      <input type="text" onChange={props.changeAge} value={props.age} />
      <button onClick={props.click}>{props.children}</button>
    </div>
  );
};

export default person;
// export default Radium(person);
