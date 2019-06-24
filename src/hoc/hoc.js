import React, { Component } from 'react';

// Most basic example
export default function hoc(WrappedComponent) {
  console.log('hoc invoked', 1);
  console.log('What is the WrappedComponent in hoc? ', WrappedComponent.name);
  // When hoc is invoked, it is passed whatever component will be rendered on the dom,
  // It then returns a function that will be passed the props when we render out this component on the dom
  // Those props are passed through to the wrapped component with whatever other data we pass through on the higher order component
  return function(props) {
    console.log('props in hoc', props);
    console.log('hoc return function invoked', 3);
    return <WrappedComponent {...props} />;
  };
}

// This is example slightly builds on the function hoc() directly above. It takes in the wrapped component and then passes through a prop to the wrapped component that is the title in state. Whatever WrappedComponent is passed through when hoc is invoked will then have access to a prop called title as well as whatever props were placed there when it was rendered out on the dom
// export default function hoc(WrappedComponent) {
//   return class extends Component {
//     constructor() {
//       super();
//       this.state = {
//         title: 'hello!'
//       };
//     }
//     render() {
//       return <WrappedComponent title={this.state.title} {...this.props} />;
//     }
//   };
// }

// More meaningful example passing through some state
