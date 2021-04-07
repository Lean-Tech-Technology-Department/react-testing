import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useSelector(state => state.loginReducer)
  return (
    <Route {...rest} render={props => (
      user ? <Component {...props} /> : <Redirect to="/auth/login" />
    )} />
  )
}

export default PrivateRoute
