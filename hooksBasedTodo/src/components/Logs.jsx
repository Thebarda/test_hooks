import React from 'react'
import PropTypes from 'prop-types'

const Logs = ({ logs }) => {
  return <div>{logs.length === 0 ? <h3>There is any log :(</h3> : logs.map((log, idx) => <p key={idx}>{log}</p>)}</div>
}

Logs.propTypes = {
  logs: PropTypes.instanceOf(Array).isRequired
}

export default Logs
