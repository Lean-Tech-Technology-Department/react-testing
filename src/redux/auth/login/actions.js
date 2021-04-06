import { LOGIN_TYPES } from './types'

export const login = (payload) => ({
  type: LOGIN_TYPES.LOGIN_USER,
  payload
})

export const loginSuccess = (payload) => ({
  type: LOGIN_TYPES.LOGIN_USER_SUCCESS,
  payload
})

export const loginFailure = (payload) => ({
  type: LOGIN_TYPES.LOGIN_USER_FAILURE,
  payload
})