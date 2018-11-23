import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.instanceOf(Array).isRequired,
    handleChangeComplete: PropTypes.func.isRequired
  }

  handleChangeComplete = (id, complete) => {
    this.props.handleChangeComplete(id, complete)
  }

  render() {
    const { todos } = this.props
    return (
      <div>
        {todos.length === 0 ? (
          <h3>There is no todo :(</h3>
        ) : (
          todos.map((todo, idx) => (
            <TodoItem key={todo.text + idx} todo={todo} handleChangeComplete={this.handleChangeComplete} />
          ))
        )}
      </div>
    )
  }
}
