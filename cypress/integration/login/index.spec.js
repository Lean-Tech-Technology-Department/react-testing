import * as pages from './../../pages/login'

describe('Login E2E tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should user logged in successfully', () => {
    pages.userSuccessfulLogin()
  })

  it('should user failed to log in', () => {
    pages.userFailedLogin()
  })
})
