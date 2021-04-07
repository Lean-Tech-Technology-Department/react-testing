import * as actions from './../../actions/login'
import { getElement } from '../general'

const USERNAME = 'test@gmail.com'
const PASSWORD = '123456'
// const WRONG_PASSWORD = '123456'

export const userSuccessfulLogin = () => {
  const usernameInput = actions.getLoginUsernameInput(USERNAME)
  usernameInput.should('have', USERNAME).should('exist')

  const passwordInput = actions.setLoginPasswordInputValue(PASSWORD)
  const button = actions.getLoginButton()
  passwordInput.should('have', PASSWORD).should('exist')
  button.should('exits').click()
  cy.intercept('/home').as('homeView')
  cy.wait('@getAccount').then((interception) => {
    getElement('homeView')
  })
}
