import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Login from './../pages/Auth/Login'

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/auth/login" component={Login} />
        <Redirect exact from="/" to="/auth/login" />
      </Switch>
    </BrowserRouter>
  )
}

export default MainRouter
