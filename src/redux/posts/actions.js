import { POSTS_TYPES } from './types'

export const getPosts = (onSuccess, onError) => ({
  type: POSTS_TYPES.GET_POSTS
})

export const getPostsSuccess = (payload) => {
  return {
    type: POSTS_TYPES.GET_POSTS_SUCCESS,
    payload
  }
}

export const getPostsFailure = (payload) => {
  return {
    type: POSTS_TYPES.GET_POSTS_FAILURE,
    payload
  }
}
export const createPosts = (payload, onSuccess, onError) => ({
  type: POSTS_TYPES.CREATE_POST, payload, onSuccess, onError
})

export const createPostSuccess = (payload) => {
  return {
    type: POSTS_TYPES.CREATE_POST_SUCCESS,
    payload
  }
}

export const createPostFailure = (payload) => {
  return {
    type: POSTS_TYPES.CREATE_POST_FAILURE,
    payload
  }
}

export const updatePost = (payload, onSuccess, onError) => ({
  type: POSTS_TYPES.UPDATE_POST, payload, onSuccess, onError
})

export const updatePostSuccess = (payload) => {
  return {
    type: POSTS_TYPES.UPDATE_POST_SUCCESS,
    payload
  }
}

export const updatePostFailure = (payload) => {
  return {
    type: POSTS_TYPES.UPDATE_POST_FAILURE,
    payload
  }
}

export const deletePost = (payload, onSuccess, onError) => ({
  type: POSTS_TYPES.DELETE_POST, payload, onSuccess, onError
})

export const deletePostSuccess = (payload) => {
  return {
    type: POSTS_TYPES.DELETE_POST_SUCCESS,
    payload
  }
}

export const deletePostFailure = (payload) => {
  return {
    type: POSTS_TYPES.DELETE_POST_FAILURE,
    payload
  }
}
