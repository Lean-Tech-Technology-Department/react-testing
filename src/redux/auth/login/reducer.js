import { LOGIN_TYPES } from './types'
export const initialState = {
  user: {},
  loading: false,
  error: ''
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_TYPES.LOGIN_USER: {
      return { ...state, user: {}, loading: true }
    }
    case LOGIN_TYPES.LOGIN_USER_SUCCESS: {
      return { ...state, user: payload, loading: false }
    }
    case LOGIN_TYPES.LOGIN_USER_FAILURE: {
      return { ...state, error: payload, loading: false }
    }
    default: {
      return state
    }
  }
}
