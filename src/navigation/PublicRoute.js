import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PublicRoute = ({ component: Component, ...rest }) => {
  const { user } = useSelector(state => state.loginReducer)
  return (
    <Route {...rest} render={props => (
      user ? <Redirect to="/dashboard" /> : <Component {...props} />
    )} />
  )
}

export default PublicRoute
