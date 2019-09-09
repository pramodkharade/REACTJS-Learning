import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
      person:[
        {name:'Pramod', age:31},
        {name:'Kishor ', age:31},
        {name:'Shital Nalawade', age:29},
      ]
  };
  switchHandler = (newName) =>{
    console.log('Switchhander is calling!!!');
    this.setState({
      person:[
        {name:newName, age:31},
        {name:'Kishor Vitekar', age:31},
        {name:'Shital Nalawade', age:30},
      ]
    });
  };
  nameChangeHandler = (event)=>{
    this.setState({
      person:[
        {name:'Dnyanda Kharade', age:31},
        {name:event.target.value, age:31},
        {name:'Shital Nalawade', age:30},
      ]
    });
  };
  render() {
    return (
      <div className="App">
        <h1>This is react course learning</h1>
        <button onClick={()=>this.switchHandler('Dnyanda!!!')}>Switch Name</button>
        <Person 
          name={this.state.person[0].name} 
          age={this.state.person[0].age} > 
          </Person>
        <Person 
          name={this.state.person[1].name} 
          age={this.state.person[1].age}
          click={this.switchHandler.bind(this,'Dnynu')}
          changed={this.nameChangeHandler}
          > My Hobbies: Racing 
          </Person>
        <Person 
          name={this.state.person[2].name} 
          age={this.state.person[2].age}> 
          </Person>
      </div>
    );
  }
}

export default App;
