import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
      person:[
        {name:'Pramod Kharade', age:31},
        {name:'Kishor Vitekar', age:31},
        {name:'Shital Nalawade', age:30},
      ]
  };
  render() {
    return (
      <div className="App">
        <h1>This is react course learning</h1>
        <button>Switch Name</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age} > </Person>
        <Person name={this.state.person[1].name} age={this.state.person[1].age}> My Hobbies: Racing </Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age}> </Person>
      </div>
    );
  }
}

export default App;
