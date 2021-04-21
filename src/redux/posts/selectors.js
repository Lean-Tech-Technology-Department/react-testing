import { createSelector } from 'reselect'

const selector = state => state.postsReducer

export const getPostsSelector = createSelector([selector], (state) => state.posts)
export const getAllStateSelector = createSelector([selector], (state) => state)
