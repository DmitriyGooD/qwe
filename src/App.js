import React, { Component } from 'react';
//import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Form from './Form.js';
import List from './List.js';

class App extends Component {
  state={ 
    tasks:[]
  } 

  componentDidMount(){
    this.getdata();
  }
  getdata=() =>{
    fetch("http://localhost:3001/tasks")
    .then(response=>{
      return response.json(); 
    })
    .then(result => this.setState({ tasks:result })) 
    .catch(error=>console.log(error))
  }

  handleInput = (data) => {
    let tasks = [ ...this.state.tasks ];
    tasks.push(data);
    this.setState({ tasks });
  }
  handleDelete = (id) => {
    let tasks = [ ...this.state.tasks ];
    tasks.splice(id, 1);
    this.setState({ tasks });
  }
  
  render() {
     
    return ( 
        <div className="row">
    <div className="col-sm-3 offset-sm-3">
    <Form update={this.handleInput} />
    </div>
    <div className="col-sm-3">
    <List tasks={this.state.tasks} delete={this.handleDelete}/> 
    </div>
    </div>    
      
    );
  }
}

export default App;
