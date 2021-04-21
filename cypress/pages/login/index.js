import * as actions from './../../actions/login'
import { getDashboardView } from '../../actions/posts'

const USERNAME = 'test@gmail.com'
const PASSWORD = '123456'
const WRONG_PASSWORD = '654321'

export const userSuccessfulLogin = () => {
  actions.checkLoginUsernameInputValue(USERNAME)
  actions.checkLoginPasswordInputValue(PASSWORD)

  actions.getLoginButton().should('exist').click()
  cy.wait(1000).then(() => {
    getDashboardView()
  })
}

export const userFailedLogin = () => {
  actions.checkLoginUsernameInputValue(USERNAME)
  actions.checkLoginPasswordInputValue(WRONG_PASSWORD)
  actions.getLoginButton().should('exist').click()
  cy.wait(1000).then(() => {
    actions.getLoginUsernameInput().should('exist')
  })
}
