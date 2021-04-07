import { Fetch } from '../../utils/fetch'
import { routes } from './routes'

const fetchDashboardInfo = () => {
  return Fetch('get', routes.dashboardInfo)
}

export { fetchDashboardInfo }
