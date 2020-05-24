import React, { Component } from 'react';
import './App.css';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <div className='App' data-test='component-app'>
        <Counter />
      </div>
    );
  }
}

export default App;
