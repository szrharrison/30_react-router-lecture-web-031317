import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'

export default function isAuthenticated( WrappedComponent ){
  return (props) => {
    if (!sessionStorage.getItem('jwt')) {
      return < Redirect to='/login' />
    }

    return < WrappedComponent {...props} />
  }
}
