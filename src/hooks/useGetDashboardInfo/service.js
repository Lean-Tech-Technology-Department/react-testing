const fetchDashboardInfo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ 
        data: [],
        title: 'Dashboard',
        availableTrucksAmount: 1
      })
    }, 2000)
  })
}

export { fetchDashboardInfo }
