export const getElement = (id) => {
  return cy.get(`[id="${id}"]`, { timeout: 10000 })
}
