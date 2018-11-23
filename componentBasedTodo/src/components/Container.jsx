import React, { Component } from 'react'
import NewTodo from './NewTodo'
import Screen from './Screen'
import TodoList from './TodoList'
import Logs from './Logs'

export default class Container extends Component {
  static propTypes = {}

  state = {
    todos: [],
    logs: [],
    newTodoText: ''
  }

  handleAddTodo = newTodo => {
    const todos = Array.from(this.state.todos)
    const logs = Array.from(this.state.logs)
    todos.push({ id: todos.length, text: newTodo, completed: false })
    logs.push(`Added : ${newTodo}`)
    this.setState({ todos, logs })
  }

  updateTodoComplete = (id, complete) => {
    const todos = Array.from(this.state.todos)
    const logs = Array.from(this.state.logs)
    const idx = todos.findIndex(todo => todo.id === id)
    logs.push(`Updated ${todos[idx].text} from ${todos[idx].completed} to ${complete}`)
    todos[idx].completed = complete
    this.setState({ todos, logs })
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: '40rem' }}>
          <NewTodo handleChangeTodoText={newTodoText => this.setState({ newTodoText })} addTodo={this.handleAddTodo} />
          <Screen todoToAdd={this.state.newTodoText} />
          <br />
          <br />
          <TodoList todos={this.state.todos} handleChangeComplete={this.updateTodoComplete} />
        </div>
        <div style={{ width: '40rem', position: 'relative' }}>
          <Logs logs={this.state.logs} />
        </div>
      </div>
    )
  }
}
