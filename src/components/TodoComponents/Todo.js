import React from 'react';

class Todo extends React.Component{

    render(){
        return(
            <h4 key={this.props.itemOnProps.id} className={this.props.itemOnProps.completed}>{this.props.itemOnProps.task}</h4>
        );
    }
} 

export default Todo;