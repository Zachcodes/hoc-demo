import React, { Component } from 'react';

// This component on a very low level simulates grabbing some people data from an api. I may then store it in the cache and provide methods on the returned class (the class withData returns) that allow us to retrieve those people from the browser cache. This has a few benefits. It allows me to not have to make calls to the api from all over the application. We can bring this hoc in and get the values off the cache. We also only need to write the logic to retrieve people and set them in the cache once; in this file.
let people = [
  {
    name: 'John',
    age: 23,
    id: 1
  },
  {
    name: 'Ariel',
    age: 32,
    id: 2
  },
  {
    name: 'Rico',
    age: 42,
    id: 3
  }
];

// The withData function takes in the WrappedComponent. It returns a function which creates a closure. The inner function will have access to the WrappedComponent (depending on which you have commented back in App.js, it should be BlueComponent or RedComponent). It then returns a class that does some setup to create a people array and an original people array. It has one method, setPeople that will update people on state. The only things this component is concerned with are 1. getting the people from the api and 2. exposing a method to the WrappedCompoent to allow that component to update people in state. As far as the ui, presentation logic or anything else components may do with the people, withData is not concerned about it.
export default function withData(WrappedComponent) {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        originalPeople: people,
        people
      };
    }

    setPeople = people => {
      this.setState({ people });
    };

    render() {
      return (
        // Lastly, WrappedCompoent is finally invoked (BlueComponent or RedComponent) and is passed through all the values on the state of this class and the setPeople method as well as additional props that were passed in App.js ({...this.props})
        <WrappedComponent
          people={this.state.people}
          setPeople={this.setPeople}
          originalPeople={this.state.originalPeople}
          {...this.props}
        />
      );
    }
  };
}
