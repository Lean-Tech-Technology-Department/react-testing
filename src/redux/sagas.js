import { call, all } from 'redux-saga/effects'
import { loginSaga } from './auth/login/saga'
import { postsSaga } from './posts/saga'

export default function * sagas() {
  yield all([
    call(loginSaga),
    call(postsSaga)
  ])
}
