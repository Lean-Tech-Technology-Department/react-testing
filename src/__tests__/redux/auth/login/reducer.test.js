import reducer, { initialState } from '../../../../redux/auth/login/reducer'
import * as actions from '../../../../redux/auth/login/actions'
import { errorMock, userMock } from '../../../../utils/tests/mocks'

describe('Login Reducer', () => {
  it('is initialized with the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('throw the login action and get the expected state', () => {

    expect(reducer(initialState, actions.login())).toEqual({
      ...initialState,
      user: null,
      loading: true
    })
  })

  it('throw the login success action with an user and get the expected state', () => {
    expect(reducer(initialState, actions.loginSuccess(userMock))).toEqual({
      ...initialState,
      user: userMock,
      loading: false
    })
  })

  it('throw the login failure with an error and get the expected state', () => {
    expect(reducer(initialState, actions.loginFailure(errorMock.message))).toEqual({
      ...initialState,
      error: errorMock.message,
      loading: false
    })
  })
})
