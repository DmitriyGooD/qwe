import React, { Component } from 'react';

class Form extends Component {
    state = {
        id:null,
        title: "",
        description:""
    }
    
    static getDerivedStateFromProps(newProps) {
      //if (newProps.task && newProps.task.hasOwnProperty('id') && newProps.task.id) {return newProps.task} else {return null}
      return newProps.task
    }
    
    render(){
        return (
            <div >
               <div className="form-group">
                <input className="form-control" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value})}></input>
                </div>
                <div className="form-group">
                <textarea className="form-control" value={this.state.description} onChange={(e) => this.setState({ description: e.target.value})}></textarea>
                </div>
                <div className="form-group">
                {!this.state.id? 
                <button className="btn btn-primary" onClick={() => this.props.update({title:this.state.title,description:this.state.description})}>Добавить </button>:
                <button className="btn btn-primary" onClick={() => this.props.update({id:this.state.id, title:this.state.title,description:this.state.description})}>Обновить </button>
                }
                </div>
            </div> 
        );
    }
}

export default Form;