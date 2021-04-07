import * as actions from './../../actions/login'
import { getElement } from '../general'

const USERNAME = 'test@gmail.com'
const PASSWORD = '123456'
const WRONG_PASSWORD = '654321'

export const userSuccessfulLogin = () => {
  actions.setLoginUsernameInputValue(USERNAME)
  actions.checkLoginUsernameInputValue(USERNAME)

  actions.setLoginPasswordInputValue(PASSWORD)
  actions.checkLoginPasswordInputValue(PASSWORD)

  const button = actions.getLoginButton()
  button.should('exist').click()
  cy.wait(1000).then(() => {
    getElement('homeView').should('exist')
  })
}

export const userFailedLogin = () => {
  actions.setLoginUsernameInputValue(USERNAME)
  actions.checkLoginUsernameInputValue(USERNAME)

  actions.setLoginPasswordInputValue(WRONG_PASSWORD)
  actions.checkLoginPasswordInputValue(WRONG_PASSWORD)
  console.log('sss')
  const button = actions.getLoginButton()
  button.should('exist').click()
  cy.wait(1000).then(() => {
    actions.getLoginUsernameInput().should('exist')
  })
}
