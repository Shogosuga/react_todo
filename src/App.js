import React, { Component } from 'react';
import TodoList from './TodoList';
import Form from './Form'
import './App.css';

class App extends Component {

  constructor() {
    super()
    
    const todos = [
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
    this.state = {
      todos : todos,
      countTodo : todos.length + 1,
    }
  }


  handleSubmit(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const desc = e.target.desc.value;
    console.log(title)
    const todos = this.state.todos.slice()
    const countTodo = this.state.countTodo

    todos.push({
      id : countTodo,
      title : title,
      desc : desc,
      done : false,
    });

    this.setState({ todos })
    this.setState({ countTodo : countTodo + 1 })

    e.target.title.value = '';
    e.target.desc.value = '';
  }


  render() {
    return (
      <div className="app">
        <h1>
          todo application
        </h1>
        <Form handleSubmit={this.handleSubmit.bind(this)} />
        <TodoList
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
