import React, { Component } from 'react';
import './App.css';
import Counter from './Counter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  render() {
    return (
      <div className='App' data-test='component-app'>
        <h1 data-test='counter-display'>The count is</h1>
        <button data-test='increment-button'>Increment counter</button>
      </div>
    );
  }
}

export default App;
