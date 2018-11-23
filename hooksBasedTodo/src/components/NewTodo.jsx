import React, { useState } from 'react'
import PropTypes from 'prop-types'

const NewTodo = ({ handleChangeTodoText, addTodo }) => {
  const [todo, setTodo] = useState('')

  const handleChangeTodoTextInner = e => {
    setTodo(e.target.value)
    handleChangeTodoText(e.target.value)
  }

  const newTodo = e => {
    if (e.key === 'Enter' && todo !== '') {
      addTodo(todo)
      handleChangeTodoText('')
      setTodo('')
    }
  }

  return (
    <div>
      <h2>Insert a new Todo</h2>
      <input type="text" name="todo" value={todo} onChange={handleChangeTodoTextInner} onKeyPress={newTodo} />
    </div>
  )
}

NewTodo.propTypes = {
  handleChangeTodoText: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired
}

export default NewTodo
