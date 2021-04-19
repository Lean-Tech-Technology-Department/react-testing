import { Typography, CircularProgress } from '@material-ui/core'
import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useGetDashboardInfo } from '../../../hooks/useGetDashboardInfo'
import { getAllStateSelector } from '../../../redux/posts/selectors'
import { getPosts } from '../../../redux/posts/actions'
import Notification from '../../../components/Notification'
import ListOfPosts from './components/ListOfPost'

const Dashboard = () => {
  const { getDashboardInfo } = useGetDashboardInfo()
  const { posts, loading, error } = useSelector(getAllStateSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    getDashboardInfo()
  }, [getDashboardInfo])

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  useEffect(() => {
    if (error) {
      alert('We couldn\'t get the posts from the server. Please contact support')
    }
  }, [error])

  if (loading && !error) {
    return <CircularProgress />
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h1" style={{ marginBottom: 10 }}>Dashboard</Typography>
      <ListOfPosts posts={posts}/>
      <Notification open={error} message={error} />
    </div>
  )
}
export default Dashboard
