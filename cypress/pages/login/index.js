import * as actions from './../../actions/login'
import { getElement } from '../general'

const USERNAME = 'test@gmail.com'
const PASSWORD = '123456'
const WRONG_PASSWORD = '654321'

export const userSuccessfulLogin = () => {
  const usernameInput = actions.setLoginUsernameInputValue(USERNAME)
  usernameInput.should('have.value', USERNAME).should('exist')

  const passwordInput = actions.setLoginPasswordInputValue(PASSWORD)
  passwordInput.should('have.value', PASSWORD).should('exist')

  const button = actions.getLoginButton()
  button.should('exist').click()
  cy.wait(1000).then(() => {
    getElement('homeView').should('exist')
  })
}

export const userFailedLogin = () => {
  const usernameInput = actions.setLoginUsernameInputValue(USERNAME)
  usernameInput.should('have.value', USERNAME).should('exist')

  const passwordInput = actions.setLoginPasswordInputValue(WRONG_PASSWORD)
  passwordInput.should('have.value', WRONG_PASSWORD).should('exist')

  const button = actions.getLoginButton()
  button.should('exist').click()
  cy.wait(1000).then(() => {
    actions.getLoginUsernameInput().should('exist')
  })
}
