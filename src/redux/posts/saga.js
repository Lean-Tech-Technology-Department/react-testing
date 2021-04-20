import { takeEvery, call, put, all } from 'redux-saga/effects'
import { POSTS_TYPES } from './types'
import * as actions from './actions'
import * as services from './service'

export function * onGetPosts() {
  yield call(services.getPosts)
  try {
    const response = yield call(services.getPosts)
    yield put(actions.getPostsSuccess(response.data))
  } catch ({ message }) {
    yield put(actions.getPostsFailure(message))
  }
}

function * handleOnGetPosts() {
  yield takeEvery(POSTS_TYPES.GET_POSTS, onGetPosts)
}

export function * onCreatePost({ payload, onSuccess, onError }) {
  try {
    const response = yield call(services.createPost, payload)
    yield put(actions.createPostSuccess(response.data))
    yield onSuccess()
  } catch ({ message }) {
    console.log(message)
    yield put(actions.createPostFailure(message))
    yield onError()
  }
}

function * handleOnCreatePost() {
  yield takeEvery(POSTS_TYPES.CREATE_POST, onCreatePost)
}

export function * onUpdatePost({ payload, onSuccess }) {
  try {
    const response = yield call(services.updatePost, payload)
    yield put(actions.updatePostSuccess(response.data))
    yield onSuccess()
  } catch ({ message }) {
    yield put(actions.updatePostFailure(message))
  }
}

function * handleOnUpdatePosts() {
  yield takeEvery(POSTS_TYPES.UPDATE_POST, onUpdatePost)
}

export function * onDeletePost({ payload }) {
  try {
    yield call(services.deletePost, payload)
    yield put(actions.deletePostSuccess(payload))
  } catch ({ message }) {
    yield put(actions.deletePostFailure(message))
  }
}

function * handleOnDeletePosts() {
  yield takeEvery(POSTS_TYPES.DELETE_POST, onDeletePost)
}

export function * postsSaga() {
  yield all([
    call(handleOnGetPosts),
    call(handleOnCreatePost),
    call(handleOnUpdatePosts),
    call(handleOnDeletePosts)
  ])
}
