import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    person: [
      { name: "Naveen", age: "25" },
      { name: "Deepak", age: "33" },
      { name: "Rahul", age: "26" },
    ],
    pageTitle: "This is Naveen React App",
  };

  changePersonDetailHandler = (name, age, idx) => {
    this.setState({
      person: this.modifyPerson(this.state.person, idx, name, age),
      pageTitle: `This is ${name} React App`,
    });
  };

  changePersonNameHandler = (event, idx) => {
    console.log("Clicked Name", event);
    this.setState({
      person: this.modifyPerson(
        this.state.person,
        idx,
        event.target.value,
        this.state.person[idx].age
      ),
      pageTitle: `This is ${event.target.value} React App`,
    });
  };

  changePersonAgeHandler = (event, idx) => {
    this.setState({
      person: this.modifyPerson(
        this.state.person,
        idx,
        this.state.person[idx].name,
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
          name={this.state.person[0].name}
          age={this.state.person[0].age}
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

        {/* <Person
          name={this.state.person[1].name}
          age={this.state.person[1].age}
        />
        <button
          onClick={() => this.changePersonDetailHandler("Siidharth", "27", 0)}
        >
          Change Detail
        </button>
        <Person
          name={this.state.person[1].name}
          age={this.state.person[1].age}
        />
        <button
          onClick={() => this.changePersonDetailHandler("Vipul", "22", 1)}
        >
          Change Detail
        </button> */}
      </div>
    );
  }
}

export default App;
