import React from 'react'
import PropTypes from 'prop-types'

const TodoItem = ({ todo, handleChangeComplete }) => {
  const handleChangeCompleteInner = () => {
    handleChangeComplete(todo.id, !todo.completed)
  }
  return (
    <div>
      <span>{todo.text}</span>
      <input type="checkbox" name={todo.id} checked={todo.completed} onChange={handleChangeCompleteInner} />
    </div>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  handleChangeComplete: PropTypes.func.isRequired
}

export default TodoItem
