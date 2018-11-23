import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const TodoList = ({ todos, handleChangeComplete }) => {
  const handleChangeCompleteInner = (id, complete) => {
    handleChangeComplete(id, complete)
  }

  return (
    <div>
      {todos.length === 0 ? (
        <h3>There is no todo :(</h3>
      ) : (
        todos.map((todo, idx) => (
          <TodoItem key={todo.text + idx} todo={todo} handleChangeComplete={handleChangeCompleteInner} />
        ))
      )}
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.instanceOf(Array).isRequired,
  handleChangeComplete: PropTypes.func.isRequired
}

export default TodoList
