import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Screen extends PureComponent {
  static propTypes = {
    todoToAdd: PropTypes.string.isRequired
  }

  render() {
    const { todoToAdd } = this.props
    return <em>{todoToAdd === '' ? "You can't an empty todo" : `Hit Enter to add : ${todoToAdd}`}</em>
  }
}
