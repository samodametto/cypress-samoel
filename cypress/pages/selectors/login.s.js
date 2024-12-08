export function mapLoginPage() {
  cy.get('.font-robot').as('loginPageTitle');
  cy.dataTest('email').as('emailField')
  cy.dataTest('senha').as('passwordField')
  cy.dataTest('entrar').as('loginButton')
  cy.dataTest('cadastrar').as('goToRegisterPageButton')
}