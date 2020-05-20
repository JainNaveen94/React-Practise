import React, { Component } from "react";

import appCSS from "./App.css";

import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";

class App extends Component {
  state = {
    persons: [
      { name: "Naveen", age: "25" },
      { name: "Deepak", age: "33" },
      { name: "Rahul", age: "26" },
    ],
    showPersons: false,
  };

  togglePersonHandler = () => {
    const showPersons = this.state.showPersons;
    this.setState({
      showPersons: !showPersons,
    });
  };

  changePersonDetailHandler = (name, age, idx) => {
    // copy of person Object which is to be modified
    let person = { ...this.state.persons[idx] };

    // update the values of person object
    person.name = name;
    person.age = age;

    // copy of the Persons Array
    let persons = [...this.state.persons];

    // Update the Copy of the Persons Array
    persons[idx] = person;

    // Update the Actual Array in state Object
    this.setState({
      persons: persons,
    });
  };

  changePersonNameHandler = (event, idx) => {
    this.changePersonDetailHandler(
      event.target.value,
      this.state.persons[idx].age,
      idx
    );
  };

  changePersonAgeHandler = (event, idx) => {
    this.changePersonDetailHandler(
      this.state.persons[idx].name,
      event.target.value,
      idx
    );
  };

  deletePersonClickHandler = (idx) => {
    // Create the Copy of the Person Array Using Spread Operator
    let persons = [...this.state.persons];
    // Delete the Entry From the Copied Array
    persons.splice(idx, 1);
    // Replace the original array to copy array
    this.setState({
      persons: persons,
    });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        click={(idx) => this.changePersonDetailHandler("Shubham", "24", idx)}
        deletePersonClick={(idx) => this.deletePersonClickHandler(idx)}
        changeNameClick={(event, idx) =>
          this.changePersonNameHandler(event, idx)
        }
        changeAgeClick={(event, idx) =>
          this.changePersonAgeHandler(event, idx)
        }
      />;
    }

    return (
      <div className={appCSS.App}>
        <Cockpit
          pageTitle={this.props.pageTitle}
          showPersons={this.state.showPersons}
          toggleClicked={() => this.togglePersonHandler()}
        />
        {persons}
      </div>
    );
  }
}

export default App;
