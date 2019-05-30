import React from 'react';

class Todo extends React.Component{

    render(){
        return(
            <div 
                className={`item ${this.props.itemOnProps.completed ? ' completed' : ''}`}
                onClick={() => this.props.toggleCompleted(this.props.itemOnProps.id)}             
                >
                <p>
                    {this.props.itemOnProps.task}
                </p>
                <p>{`Created: ${new Date(this.props.itemOnProps.id).toDateString()}`}</p>
            </div>
        );
    }
} 

export default Todo;