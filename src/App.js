import React, { Component } from 'react';
import Todos from './Todos/Todos';
import AddTodo from './Todos/AddTodo'
class App extends Component {

  state = {
    todos:[
      {id: 1, content: 'Buy Milk'},
      {id: 2, content: 'Play Open TTD'},
      {id: 3, content: 'Watch a movie'},
    ]
  }

  deleteTodo = (id) =>{
    const todos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({todos})
  }

  addTodo = (todo) =>{
    todo.id = Math.random()
    const todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }

  render() {
    return (
        <div className="todo-app container">
          <h1 className="center blue-text">Todo's</h1>

          <Todos
            todos = {this.state.todos}
            deleteTodo = {this.deleteTodo}
          />
          <AddTodo
            addTodo = {this.addTodo}
          />
        </div>
    );
  }
}

export default App;
