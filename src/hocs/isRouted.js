import React from 'react'


function isRouted(WrappedComponent, props) {
  return function(routeProps) {
    return <WrappedComponent {...props} {...routeProps} />
  }
}

export default isRouted
