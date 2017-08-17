import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList} from './components/todo';
import {addTodo, generateId} from './lib/todoHelpers';

class App extends Component {
  state = {
      todos: [
        { id: 1, name: 'Learn JSX', isComplete: false },
        { id: 2, name: 'Build a cool app', isComplete: false },
        { id: 3, name: 'Ship it', isComplete: true }
      ],
      currentTodo: ''
    }

  handleSubmit = (event) => {
    event.preventDefault();
    //if(this.state.currentTodo)
    const newId = generateId()
      const newTodo = {id: newId, name: this.state.currentTodo, isComplete:false}
      const updatedTodos = addTodo(this.state.todos, newTodo)
      this.setState({
        todos: updatedTodos,
        currentTodo: '',
        errorMessage: ''
    });
    

  }
  handleEmptySubmit = (event) => {
    event.preventDefault();
    this.setState(
      {
        errorMessage: 'Please supply a text to item'
      }
    )
  }
  handleInputChange = (event) => {
    this.setState({
        currentTodo: event.target.value
    });
  }

  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>To do list</h2>
        </div>
        <div className="App-todo">
          {this.state.errorMessage && <span className='error'>{this.state.errorMessage}</span>}
          <TodoForm handleInputChange={this.handleInputChange} currentTodo={this.state.currentTodo}
                    handleSubmit={submitHandler}/>
          <div className="App-list">
            <ul>
              <TodoList todos={this.state.todos}/>
            </ul>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
