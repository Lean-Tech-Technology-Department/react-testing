import { Fetch } from '../../../utils/fetch'
import { routes } from './routes'

const login = (payload) => {
  return Fetch('post', routes.login, payload)
}

export { login }
