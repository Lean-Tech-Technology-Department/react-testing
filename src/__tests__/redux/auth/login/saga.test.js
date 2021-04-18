import { recordSaga } from '../../../../utils/tests'
import * as actions from '../../../../redux/auth/login/actions'
import * as service from '../../../../redux/auth/login/service'
import * as saga from '../../../../redux/auth/login/saga'
import { errorMock, userMock } from '../../../../utils/tests/mocks'

jest.spyOn(service, 'login')

describe('Login Saga', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('should success when the service responds with a resolved promise', async() => {
    service.login.mockImplementation(() => Promise.resolve(userMock))
    const dispatched = await recordSaga(saga.onLogin, {})
    expect(dispatched).toContainEqual(actions.loginSuccess(userMock))
  })

  it('should fail when the service responds with a rejected promise', async() => {
    service.login.mockImplementation(() => Promise.reject(errorMock))
    const dispatched = await recordSaga(saga.onLogin, {})
    expect(dispatched).toContainEqual(actions.loginFailure(errorMock.message))
  })
})
