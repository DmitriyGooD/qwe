import React, { Component } from 'react';

class List extends Component {
    
    render(){
        return (
            <div>
                <ul>
                  {this.props.tasks.map((item, index) => {
                    return <li key={index}>{ item } <button onClick={()=>this.props.delete(index)}>Удалить</button></li> ;
            
                  })}
                </ul>
            </div> 
        );
    }
}

export default List;