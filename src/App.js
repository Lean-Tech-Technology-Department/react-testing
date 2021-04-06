import React from 'react'
import MainRouter from './navigation'
import { Provider } from 'react-redux'
import store from './redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <MainRouter />
    </Provider>
  )
}

export default App
