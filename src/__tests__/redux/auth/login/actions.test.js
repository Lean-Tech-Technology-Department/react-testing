import * as actions from '../../../../redux/auth/login/actions'
import { LOGIN_TYPES } from '../../../../redux/auth/login/types'
import { credentialsMock, errorMock, userMock } from '../../../utils/mocks'

describe('Login actions', () => {
  it('the login action returns the expected structure', () => {
    const expectedAction = {
      type: LOGIN_TYPES.LOGIN_USER,
      payload: credentialsMock
    }
    expect(actions.login(credentialsMock)).toEqual(expectedAction)
  })

  it('the login success action returns the expected structure', () => {
    const expectedAction = {
      type: LOGIN_TYPES.LOGIN_USER_SUCCESS,
      payload: userMock
    }
    expect(actions.loginSuccess(userMock)).toEqual(expectedAction)
  })

  it('the login failure action returns the expected structure', () => {
    const expectedAction = {
      type: LOGIN_TYPES.LOGIN_USER_FAILURE,
      payload: errorMock.message
    }
    expect(actions.loginFailure(errorMock.message)).toEqual(expectedAction)
  })
})
