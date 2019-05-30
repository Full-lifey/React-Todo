// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo'

import './Todo.scss'

class TodoList extends React.Component{
    render(){
        return(
            <div className='todo-items' key={this.props.currentState.id}>
                {this.props.currentState.toDoList.map(listItemFromMap => (
                    <Todo
                    key={this.props.currentState.id}
                    itemOnProps={listItemFromMap} 
                    toggleCompleted={this.props.toggleCompleted}
                    />
                ))}
            </div>
        )
    }
} 

export default TodoList;