import { combineReducers } from 'redux'
import loginReducer from './auth/login/reducer'
import { LOGIN_TYPES } from './auth/login/types'

const rootReducer = combineReducers({
  loginReducer
})

const resetEnhancer = (_rootReducer) => (state, action) => {
  if (action.type !== LOGIN_TYPES.LOGOUT) return _rootReducer(state, action)
  return _rootReducer(undefined, action)
}

export default resetEnhancer(rootReducer)
