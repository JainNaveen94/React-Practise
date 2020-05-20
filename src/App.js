import React, { Component } from "react";
// import Radium, { StyleRoot } from "radium";

import appCSS from "./App.css";

import Person from "./Person/Person";
// import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

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
    let person = null;

    // For the Inline Style
    // let buttonStyle = {
    //   backgroundColor: "green",
    //   color: "white",
    //   font: "inherit",
    //   border: "1px solid green",
    //   padding: "8px",
    //   cursor: "pointer",
    //   borderRadius: "20%",
    // ":hover": {
    //   backgroundColor: "lightgreen",
    //   color: "black",
    // },
    // };

    //for the css style
    let btnClass = "";

    // For the Dynamic Style Binding by using css classes
    let heading3Class = [];

    // Adding class based on conditions
    if (this.state.persons.length <= 2) {
      heading3Class.push("red");
    }

    if (this.state.persons.length <= 1) {
      heading3Class.push("bold");
    }

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
          // <ErrorBoundary>
            <Person
              heading3Class={heading3Class}
              name={person.name}
              age={person.age}
              click={() => this.changePersonDetailHandler("Shubham", "24", idx)}
              deletePersonClick={() => this.deletePersonClickHandler(idx)}
              changeName={(event) => this.changePersonNameHandler(event, idx)}
              changeAge={(event) => this.changePersonAgeHandler(event, idx)}
              key={idx}
            >
              <span>Child Component Button</span>
            </Person>
          // </ErrorBoundary>
        );
      });
      // Update the Style Based on Condition
      // buttonStyle.backgroundColor = "red";
      // buttonStyle.border = "1px Solid red";
      // buttonStyle[":hover"] = {
      //   backgroundColor: "salmon",
      //   color: "black",
      // };
      btnClass = appCSS.Red;
    }

    return (
      // <StyleRoot>
      <div className={appCSS.App}>
        <h1>{this.state.pageTitle}</h1>
        <button className={btnClass} onClick={() => this.togglePerson()}>
          Toggle Person
        </button>
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
      // </StyleRoot>
    );
  }
}

export default App;
// export default Radium(App);
