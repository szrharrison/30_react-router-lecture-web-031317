import React from 'react'
import { Redirect } from 'react-router-dom'

function isAuthenticated(WrappedComponent) {
  return function(props) {
    if(!sessionStorage.getItem('jwt')) {
      return <Redirect to="/login" />
    }
    return <WrappedComponent {...props} />
  }
}

export default isAuthenticated
