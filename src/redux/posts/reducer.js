import { POSTS_TYPES } from './types'
export const initialState = {
  posts: [],
  loading: false,
  error: ''
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case POSTS_TYPES.GET_POSTS:
    case POSTS_TYPES.CREATE_POST:
    case POSTS_TYPES.UPDATE_POST:
    case POSTS_TYPES.DELETE_POST:
      return { ...state, loading: true, error: '' }
    case POSTS_TYPES.GET_POSTS_SUCCESS:
    {
      return { ...state, posts: payload, loading: false }
    }
    case POSTS_TYPES.GET_POSTS_FAILURE:
      return { ...state, posts: [], loading: false, error: payload }
    case POSTS_TYPES.CREATE_POST_SUCCESS:
    {
      const previousPosts = [...this.state.posts]
      previousPosts.push(payload)
      return {
        ...state, posts: previousPosts, loading: false, error: ''
      }
    }
    case POSTS_TYPES.CREATE_POST_FAILURE:
      return { ...state, loading: 'false', error: `Comment creation failed. ${payload}` }
    case POSTS_TYPES.UPDATE_POST_SUCCESS:
    {
      const currentPosts = [...this.state.posts]
      const postIndex = currentPosts.findIndex((item) => item.id === payload.id)
      if (postIndex !== -1) postIndex[postIndex] = payload
      return { ...state, posts: postIndex, loading: false, error: '' }
    }
    case POSTS_TYPES.UPDATE_POST_FAILURE:
      return { ...state, loading: 'false', error: `Comment update failed. ${payload}` }
    case POSTS_TYPES.DELETE_POST_SUCCESS:
    {
      const currentPosts = [...this.state.posts]
      const postIndex = currentPosts.findIndex((item) => item.id === payload.id)
      if (postIndex !== -1) currentPosts.splice(postIndex, 1)
      return { ...state, posts: currentPosts, loading: false, error: '' }
    }
    case POSTS_TYPES.DELETE_POST_FAILURE:
      return { ...state, loading: 'false', error: `Comment delete failed. ${payload}` }
    default:
      return state
  }
}
