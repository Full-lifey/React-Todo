import React from 'react';

class TodoForm extends React.Component {
    


    render(){
        return(
            <form onSubmit={this.props.addToDo}>
                <input
                   placeholder='Task'
                   onChange={this.props.handleFormInput}
                   value={this.props.currentState.task}
                />
                <button>Add Task</button>
                <button>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm;