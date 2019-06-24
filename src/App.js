import React from 'react';
// import RedComponent from './components/RedComponent';
import BlueComponent from './components/BlueComponent';
import Filter from './components/Filter';
import Sort from './components/Sort';

function App() {
  console.log('App js invoked', 2);
  return (
    <div className="App">
      {/* In the hoc file, on the line where it says <WrappedComponent {...props} />, the {...props} allow us to pass through any user defined props and access them in the BlueComponent on this.props */}
      <BlueComponent name="marie" />
      {/* Comment back in if you want to see two components using the same hoc */}
      {/* <RedComponent name="john" /> */}
      <Filter />
      <Sort />
    </div>
  );
}

export default App;

// Example of a HOC using react-routers connect method
// Main difference here is that connect(state) returns a function which is a higher order component. Meaning, it gets invoked passing in the App component which is then able to get values off the redux store.
// function mapStateToProps(state) {
//   return {
//     ...state
//   }
// }
// export default connect(state)(App)
