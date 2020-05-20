import React from "react";

import personCSS from "./Person.css";

const person = (props) => {
  return (
    <div
      className={personCSS.Person}
    >
      <h3 className={personCSS[props.heading3Class]}>
        Hello Everyone, I am {props.name} and My Age is {props.age}
      </h3>
      <input type="text" onChange={props.changeName} value={props.name} />
      <input type="text" onChange={props.changeAge} value={props.age} />
      <button onClick={props.click}>{props.children}</button>
      <button className={personCSS.Red} onClick={props.deletePersonClick}>Delete Record</button>
    </div>
  );
};

export default person;
