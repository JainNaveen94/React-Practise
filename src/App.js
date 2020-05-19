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
  };

  changePersonDetailHandler = (name, age, idx) => {
    this.setState({
      persons: this.modifyPerson(this.state.persons, idx, name, age),
      pageTitle: `This is ${name} React App`,
    });
  };

  changePersonNameHandler = (event, idx) => {
    console.log("Clicked Name", event);
    this.setState({
      persons: this.modifyPerson(
        this.state.persons,
        idx,
        event.target.value,
        this.state.persons[idx].age
      ),
      pageTitle: `This is ${event.target.value} React App`,
    });
  };

  changePersonAgeHandler = (event, idx) => {
    this.setState({
      persons: this.modifyPerson(
        this.state.persons,
        idx,
        this.state.persons[idx].name,
        event.target.value
      ),
    });
  };

  modifyPerson = (array, idx, name, age) => {
    array[idx].name = name;
    array[idx].age = age;
    return array;
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.pageTitle}</h1>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={() => this.changePersonDetailHandler("Shubham", "24", 0)}
          changeName={(event) => this.changePersonNameHandler(event, 0)}
          changeAge={(event) => this.changePersonAgeHandler(event, 0)}
        >
          <span>Child Component Button</span>
        </Person>
        <button
          onClick={() => this.changePersonDetailHandler("Shubham", "24", 0)}
        >
          Change Detail
        </button>
      </div>
    );
  }
}

export default App;
