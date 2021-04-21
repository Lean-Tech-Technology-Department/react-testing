export const getElement = (id) => {
  return cy.get(`[data-testid="${id}"]`, { timeout: 10000 })
}

export const getElementsBeginsWith = (id) => {
  return cy.get(`[data-testid^="${id}"]`, { timeout: 10000 })
}

export const getHomeView = () => {
  return getElement('homeView').should('exist')
}
