import { Typography, CircularProgress } from '@material-ui/core'
import React, { useCallback, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import ListOfPosts from './components/ListOfPost'
import AddPost from './components/AddPost'
import { useGetDashboardInfo } from '../../../hooks/useGetDashboardInfo'
import { getAllStateSelector } from '../../../redux/posts/selectors'
import { getPosts, createPosts, deletePost, updatePost } from '../../../redux/posts/actions'

const Dashboard = () => {
  const { getDashboardInfo } = useGetDashboardInfo()
  const { posts, loading, actionsLoading } = useSelector(getAllStateSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    getDashboardInfo()
  }, [getDashboardInfo])

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  const addNewPost = useCallback((payload, onSuccess, onError) => {
    dispatch(createPosts(payload, () => {
      alert('Post created')
      onSuccess()
    }, onError))
  }, [])

  const updateCurrentPost = useCallback((payload, onSuccess) => {
    dispatch(updatePost(payload, () => {
      alert('Post updated')
      onSuccess()
    }, () => alert('Post couldn\'t be updated')))
  }, [])

  const deleteCurrentPost = useCallback((id) => {
    dispatch(deletePost(id, () => alert('Post delete'), () => alert('Post couldn\'t be deleted')))
  }, [])

  if (loading) {
    return <CircularProgress />
  }
  return (
    <div {...{ 'data-testid': 'DashboardView' }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 500, margin: 'auto' }}>
      <Typography variant="h1" style={{ marginBottom: 10 }} >
        Dashboard
      </Typography>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-end', marginBottom: 10 }}>
        <AddPost onPostCreation={addNewPost} loading={actionsLoading} />
      </div>
      <ListOfPosts posts={posts} onDelete={deleteCurrentPost} onEdit={updateCurrentPost} loading={actionsLoading}/>
    </div>
  )
}
export default Dashboard
