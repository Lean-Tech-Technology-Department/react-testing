import { takeEvery, call, put, all } from 'redux-saga/effects'
import { LOGIN_TYPES } from './types'
import * as loginActions from './actions'
import { login } from './service'

export function * onLogin({ payload }) {
  try {
    const response = yield call(login, payload)
    yield put(loginActions.loginSuccess(response))
  } catch ({ message }) {
    yield put(loginActions.loginFailure(message))
  }
}

function * onHandleLogin() {
  yield takeEvery(LOGIN_TYPES.LOGIN_USER, onLogin)
}

export function * loginSaga() {
  yield all([
    call(onHandleLogin)
  ])
}
