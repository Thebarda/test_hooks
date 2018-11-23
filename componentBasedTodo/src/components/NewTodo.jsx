import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class NewTodo extends PureComponent {
  static propTypes = {
    handleChangeTodoText: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired
  }

  state = {
    todo: ''
  }

  handleChangeTodoText = e => {
    this.setState({
      todo: e.target.value
    })
    this.props.handleChangeTodoText(e.target.value)
  }

  newTodo = e => {
    if (e.key === 'Enter' && this.state.todo !== '') {
      this.props.addTodo(this.state.todo)
      this.props.handleChangeTodoText('')
      this.setState({
        todo: ''
      })
    }
  }

  render() {
    return (
      <div>
        <h2>Insert a new Todo</h2>
        <input
          type="text"
          name="todo"
          value={this.state.todo}
          onChange={this.handleChangeTodoText}
          onKeyPress={this.newTodo}
        />
      </div>
    )
  }
}
