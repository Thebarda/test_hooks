import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    handleChangeComplete: PropTypes.func.isRequired
  }

  handleChangeComplete = () => {
    const { todo } = this.props
    this.props.handleChangeComplete(todo.id, !todo.completed)
  }

  render() {
    const { todo } = this.props
    return (
      <div>
        <span>{todo.text}</span>
        <input type="checkbox" name={todo.id} checked={todo.completed} onChange={this.handleChangeComplete} />
      </div>
    )
  }
}
