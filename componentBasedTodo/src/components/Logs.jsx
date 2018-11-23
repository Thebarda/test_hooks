import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Logs extends PureComponent {
  static propTypes = {
    logs: PropTypes.instanceOf(Array).isRequired
  }

  render() {
    const { logs } = this.props
    return (
      <div>{logs.length === 0 ? <h3>There is any log :(</h3> : logs.map((log, idx) => <p key={idx}>{log}</p>)}</div>
    )
  }
}
