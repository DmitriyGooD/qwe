import React, { Component } from 'react';

class Form extends Component {
    state = {
        title: "",
        description:""
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
                <button className="btn btn-primary" onClick={() => this.props.update({title:this.state.title,description:this.state.description})}>Добавить </button>
                </div>
            </div> 
        );
    }
}

export default Form;