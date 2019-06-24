import React, { Component } from 'react';
import withData from '../hoc/withData';

// Filter will bring in withData (our hoc). We then set up the filter class which has the ability to update search value on state and in the callback of the handle change method, it will use the originalPeople array (this.props.originalPeople) which is passed down from the withData hoc.
// If you are confused by that, go look at the render method of withData and look specifically at the props passed to WrappedComponent. Notice how those same property names are referenced in this component.
class Filter extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
  }

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value }, () => {
      let filtered;
      if (this.state.search)
        filtered = this.props.originalPeople.filter(
          p =>
            p.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        );
      else filtered = this.props.originalPeople;
      // We can do whatever filtering or sorting we want in this Filter component and when we have our list of people to display, we can call the setPeople method passed down from withData. That will update people and pass the new value in state down to this component on props.
      this.props.setPeople(filtered);
    });
  };

  render() {
    return (
      <div>
        <p>
          Search:{' '}
          <input
            name="search"
            value={this.state.search}
            onChange={this.handleChange}
          />
        </p>
        {/* Anytime people changes on props, we will get a rerender */}
        {this.props.people.map(p => {
          return (
            <div key={p.id}>
              <p>Name: {p.name}</p>
              <p>{p.age}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

// This is the hoc pattern in action. withData(Filter) means that in the withData file, the WrappedComponent in withData( WrappedComponent ) will be Filter
const wrapped = withData(Filter);
export default wrapped;
