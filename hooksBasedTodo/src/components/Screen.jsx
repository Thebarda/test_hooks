import React from 'react'
import PropTypes from 'prop-types'

const Screen = ({ todoToAdd }) => {
  return <em>{todoToAdd === '' ? "You can't add an empty todo" : `Hit Enter to add : ${todoToAdd}`}</em>
}

Screen.propTypes = {
  todoToAdd: PropTypes.string.isRequired
}

export default Screen
