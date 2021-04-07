import { useState, useCallback } from 'react'
import { fetchDashboardInfo } from './service'

export const useGetDashboardInfo = () => {
  const [info, setInfo] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const getDashboardInfo = useCallback(
    () => {
      setLoading(true)
      fetchDashboardInfo()
        .then((res) => setInfo(res))
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false))
    },
    []
  )

  return {
    getDashboardInfo,
    info,
    loading,
    error
  }
}