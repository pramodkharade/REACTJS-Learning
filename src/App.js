import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is react course learning</h1>
        <Person name="Pramod" age="30" > </Person>
        <Person name="Kishor" age="30" > My Hobbies: Racing </Person>
        <Person name="Shital" age="29" > </Person>
      </div>
    );
  }
}

export default App;
