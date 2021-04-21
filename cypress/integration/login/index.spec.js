import { getDashboardView } from '../../actions/posts'
import * as pages from './../../pages/login'

describe('Login E2E tests', () => {
  before(() => {
    cy.visit('/')
  })

  it('should user logged in successfully', () => {
    pages.userSuccessfulLogin()
  })

  it('should user failed to log in', () => {
    cy.visit('/')
    pages.userFailedLogin()
    getDashboardView().should('exist')
  })
})
