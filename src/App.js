import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Naveen", age: "25" },
      { name: "Deepak", age: "33" },
      { name: "Rahul", age: "26" },
    ],
    pageTitle: "This is Naveen React App",
    showPersons: false,
  };

  togglePerson = () => {
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

  render() {
    let person = null;

    if (this.state.showPersons) {
      // person = (
      //   <Person
      //     name={this.state.persons[0].name}
      //     age={this.state.persons[0].age}
      //     click={() => this.changePersonDetailHandler("Shubham", "24", 0)}
      //     changeName={(event) => this.changePersonNameHandler(event, 0)}
      //     changeAge={(event) => this.changePersonAgeHandler(event, 0)}
      //   >
      //     <span>Child Component Button</span>
      //   </Person>
      // )
      person = this.state.persons.map((person, idx) => {
        return (
          <Person
            name={person.name}
            age={person.age}
            click={() => this.changePersonDetailHandler("Shubham", "24", idx)}
            changeName={(event) => this.changePersonNameHandler(event, idx)}
            changeAge={(event) => this.changePersonAgeHandler(event, idx)}
            key={idx}
          >
            <span>Child Component Button</span>
          </Person>
        );
      });
    }

    return (
      <div className="App">
        <h1>{this.state.pageTitle}</h1>
        <button onClick={() => this.togglePerson()}>Toggle Person</button>
        {person}
        {/* { this.state.showPersons ? 
        (<Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={() => this.changePersonDetailHandler("Shubham", "24", 0)}
          changeName={(event) => this.changePersonNameHandler(event, 0)}
          changeAge={(event) => this.changePersonAgeHandler(event, 0)}
        >
          <span>Child Component Button</span>
        </Person>) : null} */}
      </div>
    );
  }
}

export default App;
