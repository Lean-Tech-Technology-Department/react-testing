import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Login from './../pages/Auth/Login'
import Home from './../pages/Home'

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/home" component={Home} />
        <Redirect exact from="/" to="/auth/login" />
      </Switch>
    </BrowserRouter>
  )
}

export default MainRouter
