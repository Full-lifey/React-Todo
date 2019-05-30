import React from 'react';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            task: ''
        }
    }
    handleFormInput = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }
    addToDo = event => {
        event.preventDefault();
        this.props.addToDo(this.state.task);
        this.setState({
            task: ''
        })
    }
    render(){
        return(
            <form onSubmit={this.addToDo}>
                <input
                   placeholder='Task'
                   onChange={this.handleFormInput}
                   value={this.state.task}
                   name='task'
                />
                <button>Add Task</button>
                <button onClick={this.props.clearCompleted}>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm;