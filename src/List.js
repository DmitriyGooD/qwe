import React, { Component } from 'react';

class List extends Component {
    
    render(){
        return (
            <div>
                
                  {this.props.tasks.map(item => {
                    return (<div key={item.id} className="card" style={{marginBottom:"5px"}}>
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.description}</p>
                    </div>
                    <button onClick={() => this.props.delete(item.id)}>
                  Удалить
                </button>
                <button onClick={() => this.props.edit(item)}>
                  Изменить
                </button>
                  </div> );
            
                  })}
                
            </div> 
        );
    }
}

export default List;