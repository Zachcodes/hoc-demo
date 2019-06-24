import React, { Component } from 'react';
import withData from '../hoc/withData';

// Most of the comments pertaining to the logic of how hoc and components interact with each other lives in the Filter.js file and the withData.js file.
// The one important thing to note is that the functionality contained in this component of sorting people by name or age is completely different than the logic for filtering names. They both use the withData hoc though which gives them acccess to the people and the method to update it. So both Sort and Filter will have their own instance of the returned class from withData to refer to, each with their own instance of state.
class Sort extends Component {
  constructor() {
    super();
    this.state = {
      sort: 'name'
    };
  }

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value }, () => {
      let sorted = this.props.originalPeople.sort((a, b) => {
        if (a[this.state.sort] < b[this.state.sort]) return -1;
        if (a[this.state.sort] > b[this.state.sort]) return 1;
        return 0;
      });
      this.props.setPeople(sorted);
    });
  };

  render() {
    return (
      <div>
        <p>
          <select
            name="sort"
            value={this.state.sort}
            onChange={this.handleChange}
          >
            <option value="name">Name</option>
            <option value="age">Age</option>
          </select>
        </p>
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

const wrapped = withData(Sort);
export default wrapped;
