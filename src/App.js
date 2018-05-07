import React, { Component } from 'react';
//import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Form from './Form.js';
import List from './List.js';

const EmptyTask={
  id:null,
  title: "",
  description:""
}
class App extends Component {
  state = {
    tasks: [],
    task: {...EmptyTask}
  }

  componentDidMount() {
    this.getdata();
  }
  getdata = () => {
    fetch("http://localhost:3001/tasks", {})
      .then(response => {
        return response.json();
      })
      .then(data => this.setState({ tasks: data }))
      .catch(error => console.log(error))
  }

  handleInput = data => {
    if (data.id) { this.handleUpdate(data) } else { this.handleCreate(data) }
  };

  //handleInput = (data) => {
  //let tasks = [ ...this.state.tasks ];
  //tasks.push(data);
  //this.setState({ tasks });
  //}
  handleCreate = data => {
    fetch("/tasks", {
      method: "POST",
      accept: "application/json",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.status === 200 || response.status === 201) {
          return response.json();
        } else {
          throw new Error("Произошла ошибка!");
        }
      })

      .then(task => {
        let tasks = [...this.state.tasks];
        tasks.push(task);
        this.setState({ tasks })
      })

      .catch(error => {
        console.log("ошибка", error.message);
      });
  }
  handleEdit = data => {
    this.setState({ task: data })

  }

  handleUpdate = data => {
    fetch(`/tasks/${data.id}`, {
      method: "PUT",
      accept: "application/json",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Произошла ошибка!");
        }
      })
      .then(data => {
        const tasks = this.state.tasks.map(item => {
          if (item.id===data.id) {return data } else {return item}
        });
        this.setState({tasks,task:{...EmptyTask}})
       })
       
  }

  handleDelete = id => {
    fetch(`/tasks/${id}`, {
      method: "DELETE",
      accept: "application/json",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(response => {
        if (response.status === 200 || response.status === 201) {
          return response.json();
        } else {
          throw new Error("Произошла ошибка!");
        }
      })

      .then(() => {
        let tasks = [...this.state.tasks];
        tasks = tasks.filter(item => id !== item.id);
        this.setState({ tasks });
      })
      .catch(error => {
        console.log("ошибка", error.message);
      });
  }

  // handleDelete = (id) => {
  //let tasks = [ ...this.state.tasks ];
  //tasks.splice(id, 1);
  //this.setState({ tasks });
  //}

  render() {

    return (
      <div className="row">
        <div className="col-sm-3 offset-sm-3">
          <Form update={this.handleInput} task={this.state.task} />
        </div>
        <div className="col-sm-3">
          <List tasks={this.state.tasks} delete={this.handleDelete} edit={this.handleEdit} />
        </div>
      </div>

    );
  }
}

export default App;
