/* eslint-disable sonarjs/no-duplicate-string */
import * as actions from '../../actions/posts'
import { BODY, ID, TITLE } from '../../utils/posts'

export const dashboardViewShouldRenderProperly = () => {
  actions.getDashboardView().should('exist').contains('Dashboard')
  actions.getAddPostButton().should('be.visible')
  actions.getPostList().should('exist')
  actions.getPostCards().first().should('exist')
}

export const createNewPost = () => {
  actions.getAddPostButton().should('be.visible').click()
  actions.getAddPostModal().should('be.visible').within(() => {
    actions.getPostModalTitleInput().should('be.visible').within(() => {
      cy.get('input').type(TITLE).should('have.value', TITLE)
    })
    actions.getPostModalBodyInput().should('be.visible').within(() => {
      cy.get('textarea').type(BODY).should('have.value', BODY)
    })
    actions.getPostModalButtonOk().should('be.visible').click()
  })
  actions.getAddPostModal().should('not.exist')
  actions.getPostCards().first().contains(`ID: ${ID}`)
}

export const deletePost = () => {
  actions.getPostCards().first().children().first().within(() => {
    actions.getPostOptionsButton().click()
  })
  actions.getPostMenuDeleteOption().should('exist').click()
  actions.getPostCards().first().should('not.contain.text', `ID: ${ID}`)
}
