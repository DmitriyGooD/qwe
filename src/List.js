import React, { Component } from 'react';

class List extends Component {
    
    render(){
        return (
            <div>
                
                  {this.props.tasks.map((item, index) => {
                    return (<div key={index} className="card" style={{marginBottom:"5px"}}>
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.description}</p>
                    </div>
                  </div> );
            
                  })}
                
            </div> 
        );
    }
}

export default List;