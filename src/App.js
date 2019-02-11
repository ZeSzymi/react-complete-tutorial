import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hi I'm a React app</h1>
        <Person />
      </div>
    );
  }
}

export default App;
