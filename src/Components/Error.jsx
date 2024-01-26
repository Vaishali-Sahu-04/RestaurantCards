import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
    const err = useRouteError();
  return (
    <div>
      <h1>OOPs!!This page doesn't exist</h1>
      <h3>{err.status}:{err.statusText}</h3>
    </div>
  )
}

export default Error
