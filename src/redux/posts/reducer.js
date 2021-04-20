import { POSTS_TYPES } from './types'
export const initialState = {
  posts: [],
  listLoading: false,
  actionsLoading: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case POSTS_TYPES.GET_POSTS:
      return { ...state, listLoading: true }
    case POSTS_TYPES.GET_POSTS_SUCCESS:
    {
      return { ...state, posts: payload, loading: false }
    }
    case POSTS_TYPES.GET_POSTS_FAILURE:
      return { ...state, posts: [], loading: false, error: payload }
    case POSTS_TYPES.CREATE_POST:
    case POSTS_TYPES.UPDATE_POST:
    case POSTS_TYPES.DELETE_POST:
      return { ...state, actionsLoading: true }
    case POSTS_TYPES.CREATE_POST_SUCCESS:
    {
      const previousPosts = [...[payload.data], ...state.posts]
      return {
        ...state, posts: previousPosts, actionsLoading: false
      }
    }
    case POSTS_TYPES.CREATE_POST_FAILURE:
      return { ...state, actionsLoading: false }
    case POSTS_TYPES.UPDATE_POST_SUCCESS:
    {
      const currentPosts = [...state.posts]
      const postIndex = currentPosts.findIndex((item) => item.id === payload.data.id)
      if (postIndex !== -1) currentPosts[postIndex] = payload.data
      return { ...state, posts: currentPosts, actionsLoading: false }
    }
    case POSTS_TYPES.UPDATE_POST_FAILURE:
      return { ...state, actionsLoading: false, error: `Comment update failed. ${payload}` }
    case POSTS_TYPES.DELETE_POST_SUCCESS:
    {
      const currentPosts = [...state.posts]
      const postIndex = currentPosts.findIndex((item) => item.id === payload)
      if (postIndex !== -1) currentPosts.splice(postIndex, 1)
      return { ...state, posts: currentPosts, actionsLoading: false }
    }
    case POSTS_TYPES.DELETE_POST_FAILURE:
      return { ...state, actionsLoading: false, error: `Comment delete failed. ${payload}` }
    default:
      return state
  }
}
