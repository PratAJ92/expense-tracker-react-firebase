import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {

  const error = useRouteError()

  console.log(error)

  return (
    <div style={{textAlign: 'center'}}>
      <h3>Oops, error has occured</h3>
      <h5>{error.statusText || error.message}</h5>
    </div>
  )
}

export default ErrorPage