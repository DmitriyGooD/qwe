import React, { Component } from 'react';

class Form extends Component {
    state = {
        value: "yyy"
    }
    render(){
        return (
            <div>
                <input value={this.state.value} onChange={(e) => this.setState({ value: e.target.value})}></input>
                <button onClick={() => this.props.update(this.state.value)}>Добавить </button>
            </div> 
        );
    }
}

export default Form;