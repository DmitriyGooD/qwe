import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form.js';
import List from './List.js';

class App extends Component {
  state={ 
    tasks:[]
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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Test</h1>
        </header>
        <Form update={this.handleInput} />
        <List tasks={this.state.tasks} delete={this.handleDelete}/>
      </div>
    );
  }
}

export default App;
