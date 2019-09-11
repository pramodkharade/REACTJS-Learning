import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
      persons:[
        {name:'Pramod', age:31},
        {name:'Kishor ', age:31},
        {name:'Shital Nalawade', age:29},
      ],
      showPerson:false,
  };
  switchHandler = (newName) =>{
    console.log('Switchhander is calling!!!');
    this.setState({
      persons:[
        {name:newName, age:31},
        {name:'Kishor Vitekar', age:31},
        {name:'Shital Nalawade', age:30},
      ]
    });
  };
  deletePersonHandler = (personIndex) =>{
    //const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});

  };
  nameChangeHandler = (event)=>{
    this.setState({
      persons:[
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
            { this.state.persons.map((person,index)=>{
              return <Person name={person.name} age={person.age} click={()=>this.deletePersonHandler(index)}></Person>
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
