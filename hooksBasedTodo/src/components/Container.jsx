import React, { useState, useEffect } from 'react'
import NewTodo from './NewTodo'
import Screen from './Screen'
import Logs from './Logs'
import TodoList from './TodoList'

const Container = () => {
  const [todos, setTodos] = useState([])
  const [logs, setLogs] = useState([])
  const [newTodoText, setNewTodoText] = useState('')
  let firstRender = true

  useEffect(() => {
    if (firstRender) {
      // componentDidMount
      firstRender = false
    } else {
      // componentDidUpdate
    }
    console.log('new', todos, logs)
    return () => {
      // componentWillUnMount
    }
  })

  const handleAddTodo = newTodo => {
    const newTodos = Array.from(todos)
    const newLogs = Array.from(logs)
    newTodos.push({ id: newTodos.length, text: newTodo, completed: false })
    newLogs.push(`Added : ${newTodo}`)
    setTodos(newTodos)
    setLogs(newLogs)
  }

  const updateTodoComplete = (id, complete) => {
    const newTodos = Array.from(todos)
    const newLogs = Array.from(logs)
    const idx = newTodos.findIndex(todo => todo.id === id)
    newLogs.push(`Updated ${todos[idx].text} from ${todos[idx].completed} to ${complete}`)
    todos[idx].completed = complete
    setTodos(newTodos)
    setLogs(newLogs)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '40rem' }}>
        <NewTodo handleChangeTodoText={newTodoText => setNewTodoText(newTodoText)} addTodo={handleAddTodo} />
        <Screen todoToAdd={newTodoText} />
        <br />
        <br />
        <TodoList todos={todos} handleChangeComplete={updateTodoComplete} />
      </div>
      <div style={{ width: '40rem', position: 'relative' }}>
        <Logs logs={logs} />
      </div>
    </div>
  )
}

export default Container
