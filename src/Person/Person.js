import React from "react";

import "./Person.css";

const person = (props) => {

  return (
    <div className="person" onClick={props.deletePersonClick}>
      <h3 className={props.heading3Class.join(' ')}>
        Hello Everyone, I am {props.name} and My Age is {props.age}
      </h3>
      <input type="text" onChange={props.changeName} value={props.name} />
      <input type ="text" onChange={props.changeAge} value={props.age} />
      <button onClick={props.click}>{props.children}</button>
    </div>
  );
};

export default person;
