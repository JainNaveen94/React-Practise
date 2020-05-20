import React from "react";
// import Radium from 'radium';

import personCSS from "./Person.css";
import appCSS from "../App.css";

const person = (props) => {
  // let mediaStyleOnCard = {
  //   '@media (min-length : 500px)' : {
  //     width: "450px"
  //   }
  // }

  // Just To Demostrate The Error Handling In React
  // const rndm = Math.random();

  // if(rndm > 0.7) {
  //   throw new Error('Some Error Occured While Rendering Person');
  // }

  return (
    <div
      className={personCSS.person}
      // style={mediaStyleOnCard}
    >
      <h3 className={props.heading3Class.join(" ")}>
        Hello Everyone, I am {props.name} and My Age is {props.age}
      </h3>
      <input type="text" onChange={props.changeName} value={props.name} />
      <input type="text" onChange={props.changeAge} value={props.age} />
      <button onClick={props.click}>{props.children}</button>
      <button className={appCSS.Red} onClick={props.deletePersonClick}>Delete Record</button>
    </div>
  );
};

export default person;
// export default Radium(person);
