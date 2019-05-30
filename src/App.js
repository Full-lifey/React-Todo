import React from 'react';
import './App.scss'
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props){
    super();
    this.state = {
      toDoList: [{
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
      },
      {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false
      }],
      // task: '',
      // id: null,
      // completed: 'false'
    }
  }
  addToDo = taskName => {
    const newTodo = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState(prevState => {
      return {
        toDoList: [...this.state.toDoList, newTodo]
      }
    })
  }

  handleFormInput = event => {
    this.setState({
      task: event.target.value
    })
  }

  toggleCompleted = id => {
    this.setState(prevState =>{
      return {
        toDoList: prevState.toDoList.map(item => {
          if (item.id === id){
            return {
              ...item,
              completed: !item.completed
            }
          } else {
            return item
          }
        })
      }
    })
  }

  clearCompleted = (e) => {
    e.preventDefault()
    const activeTasks = this.state.toDoList.filter(task => task.completed === false)
    this.setState(prevState => {
      return {
        toDoList: [...activeTasks]
      }
    })
  }

  render() {
    return (
      <div className='todo-app'>
        <h1>Your Tasks</h1>

        <div className='todo-form'>
          <TodoForm 
            // currentState={this.state}
            // handleFormInput={this.handleFormInput}
            addToDo={this.addToDo}
            clearCompleted={this.clearCompleted}
          />
        </div>
        <div className='todo-container'>
          <TodoList 
            currentState={this.state}
            toggleCompleted={this.toggleCompleted}
          />
        </div>
      </div>
    );
  }
}

export default App;
