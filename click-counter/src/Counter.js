import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({ count }) => ({ count: count + 1 }));
  }

  render() {
    return (
      <div>
        <h1>The count is {this.state.count}</h1>
        <button onClick={this.handleClick}>Increment counter</button>
      </div>
    );
  }
}

export default Counter;
