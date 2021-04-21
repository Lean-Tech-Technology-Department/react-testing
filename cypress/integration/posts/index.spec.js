import * as pages from '../../pages/posts'
import { userSuccessfulLogin } from '../../pages/login'

describe('Posts E2E testing', () => {
  before(() => {
    cy.visit('/')
  })

  it('should render the dashboard view correctly with all its main elements', () => {
    userSuccessfulLogin()
    pages.dashboardViewShouldRenderProperly()
  })

  it('should create a new post successfully', () => {
    pages.createNewPost()
  })

  it('should delete created post successfully', () => {
    pages.deletePost()
  })
})
