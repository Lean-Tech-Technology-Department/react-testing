import { takeEvery, call, put } from 'redux-saga/effects'
import { LOGIN_TYPES } from './types'
import * as loginActions from './actions'
import { login } from './service'

export function* onLogin({ payload }) {
  try {
    const response = yield call(login, payload)
    yield put(loginActions.loginSuccess(response))
  } catch ({ message }) {
    yield put(loginActions.loginFailure(message))
  }
}

export function * loginSaga() {
  yield takeEvery(LOGIN_TYPES.LOGIN, onLogin)
}