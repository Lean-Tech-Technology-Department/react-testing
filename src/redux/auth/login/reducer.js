import { LOGIN_TYPES } from './types'
const initialState = {
  user: {},
  loading: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_TYPES.LOGIN_USER: {
      return { ...state, user: {}, loading: true }
    }
    case LOGIN_TYPES.LOGIN_USER_SUCCESS: {
      return { ...state, user: {}, loading: false }
    }
    case LOGIN_TYPES.LOGIN_USER_FAILURE: {
      return { ...state, user: {}, loading: false }
    }
    default: {
      return state
    }
  }
}
