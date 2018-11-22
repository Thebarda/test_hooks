import React, { useState } from 'react'
import Input from './Input'
import Screen from './Screen'

const Container = () => {
  const [text, setText] = useState('')
  const [screen, setScreen] = useState('one')

  const changeScreen = (screen = 'two') => {
    setScreen(screen)
  }

  return (
    <div>
      {screen === 'one' ? (
        <div>
          <Input handleChangeText={text => setText(text)} handleChangeScreenClick={changeScreen} text={text} />
          <Screen display={text} />
        </div>
      ) : (
        <div>
          <p>It is screen two</p>
          <button onClick={() => changeScreen('one')}>To screen one</button>
        </div>
      )}
    </div>
  )
}

export default Container
