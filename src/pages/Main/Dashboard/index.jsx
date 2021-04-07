import { Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useGetDashboardInfo } from '../../../hooks/useGetDashboardInfo'

const Dashboard = () => {
  const { getDashboardInfo } = useGetDashboardInfo()

  useEffect(() => {
    getDashboardInfo()
  }, [getDashboardInfo])

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Typography variant="h1">Dashboard</Typography>
    </div>
  )
}
export default Dashboard
