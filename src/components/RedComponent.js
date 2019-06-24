import React from 'react';
import hoc from '../hoc/hoc';

// simple example
function RedComponent(props) {
  console.log('MyComponent invoked last', 4);
  console.log('What are props in MyComponent? ', props);
  console.log('What function called me? The inner return function of hoc');
  return <div>{props.name}</div>;
}

// meaningful example
// function MyComponent(props) {
//   return (
//     <div>
//       Title: {props.title}
//       Name: {props.name}
//     </div>
//   );
// }

// hoc is invoked first when this file is imported
const wrapped = hoc(RedComponent);

export default wrapped;
