import React, { useEffect } from 'react'

const Screen = ({ display }) => {
  useEffect(
    () => {
      console.log(display)
    },
    [display]
  )

  return <div>{display}</div>
}

export default Screen
