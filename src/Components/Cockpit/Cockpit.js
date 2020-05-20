import React from "react";

import cockpitCSS from './Cockpit.css';

const Cockpits = (props) => {
    let btnClass = '';
    if(props.showPersons) {
        btnClass = cockpitCSS.Red;
    }
  return (
    <div className={cockpitCSS.Cockpit}>
      <h1>{props.pageTitle}</h1>
      <button className={btnClass} onClick={() => props.toggleClicked()}>
        Toggle Person
      </button>
    </div>
  );
};

export default Cockpits;
