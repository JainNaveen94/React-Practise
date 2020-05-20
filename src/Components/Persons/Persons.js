import React from "react";

import Person from "./Person/Person";

const Persons = (props) =>
  props.persons.map((person, idx) => {
    return <Person
      heading3Class={props.persons.length === 2 ? 'red' : props.persons.length <= 1 ? 'red-bold': 'normal'}
      name={person.name}
      age={person.age}
      click={() => props.click(idx)}
      deletePersonClick={() => props.deletePersonClick(idx)}
      changeName={(event) => props.changeNameClick(event, idx)}
      changeAge={(event) => props.changeAgeClick(event, idx)}
      key={idx}
    >
      <span>Custom Click</span>
    </Person>
  });

export default Persons;
