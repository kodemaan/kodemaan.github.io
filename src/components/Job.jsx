import React from 'react'

const Job = props => (
  <div>
    <h1>{props.title}</h1>
    <h4>{props.timeWorked}</h4>
    <p>{props.description}</p>
    <h5>Responsibilities</h5>
    <ul>{props.responsibilities.map(responsibility => <li>{responsibility}</li>)}</ul>
  </div>
)

export default Job