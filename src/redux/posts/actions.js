import { POSTS_TYPES } from './types'

export const getPosts = () => ({
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
export const createPosts = () => ({
  type: POSTS_TYPES.CREATE_POST
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

export const updatePosts = () => ({
  type: POSTS_TYPES.UPDATE_POST
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

export const deletePosts = () => ({
  type: POSTS_TYPES.DELETE_POST
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
