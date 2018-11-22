import React, { useState, useEffect } from 'react'

const Input = props => {
  const [text, setText] = useState(props.text ? props.text : '')
  const [date, setDate] = useState(new Date().toUTCString())
  let updateRender = false
  let interval = null

  const handleChangeText = e => {
    setText(e.target.value)
  }

  // shouldComponentUpdate
  useEffect(
    () => {
      if (updateRender) {
        console.log('input')
        props.handleChangeText(text)
      }
    },
    [text]
  )

  // componentDidMount
  useEffect(() => {
    console.log('hello')
    updateRender = true
    interval = setInterval(() => {
      setDate(new Date().toUTCString())
    }, 1000)
    // componentWillUnmount
    return () => {
      clearInterval(interval)
      console.log('Goodbye')
    }
  }, [])

  return (
    <div>
      <p>It is screen one</p>
      <h2> It is : {date}</h2>
      <label htmlFor="text">Type some text here :</label>
      <input autoFocus={true} type="text" id="text" name="text" value={text} onChange={handleChangeText} />
      <button
        onClick={e => {
          e.preventDefault()
          props.handleChangeScreenClick()
        }}
      >
        Change screen
      </button>
    </div>
  )
}

export default Input
