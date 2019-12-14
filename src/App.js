import React, { Component } from 'react';
import TodoList from './TodoList';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      todos : [
        {
          id : 1,
          title : "Hello React!",
          desc : "React start",
          done :  false
        },
        {
          id : 2,
          title :  "Hello Wolrd!",
          desc : "Start Redux",
          done : false
        },
      ]
    }
  }

  render() {
    return (
      <div className="app">
        <h1>
          todo application
        </h1>
        <TodoList
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
