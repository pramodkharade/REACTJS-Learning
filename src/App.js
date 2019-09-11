import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
      person:[
        {name:'Pramod', age:31},
        {name:'Kishor ', age:31},
        {name:'Shital Nalawade', age:29},
      ],
      showPerson:false,
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
  togglePersonHandler = ()=>{
    const doesShow = this.state.showPerson
    console.log('Calling Toggle::',doesShow);
    this.setState({
      showPerson: !doesShow
    });
    console.log('Calling Toggle::',this.state.showPerson);
  }; 
  render() {
    const style = {
      backgroundColor:'white',
      font:'inherit',
      padding:'8px',
      border:'1px solid #ccc',
      cursor:'pointer'
    };
    let persons  = null;
    if(this.state.showPerson){
      persons=(
        <div>
            { this.state.persons.map(person=>{
              return <Person name={person.name} age={person.age}></Person>
            })}
            
        </div>);
    }
    return (
      <div className="App">
        <h1>This is react course learning</h1>
        <button 
          style={style}
          onClick={this.togglePersonHandler}>Toggle Persons</button>
         {persons}
          </div>
          
    );
  }
}

export default App;
