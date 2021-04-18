import React from 'react'
import { BrowserRouter, Redirect, Switch } from 'react-router-dom'
import Dashboard from '../pages/Main/Dashboard'
import Login from './../pages/Auth/Login'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute exact path="/auth/login" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Redirect exact from="/" to="/auth/login" />
      </Switch>
    </BrowserRouter>
  )
}

export default MainRouter
