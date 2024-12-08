export function mapRegisterUserPage() {
  cy.get('.font-robot').as('registerUserPageTitle');
  cy.dataTest('nome').as('nameField')
  cy.dataTest('email').as('emailField')
  cy.dataTest('password').as('passwordField')
  cy.dataTest('checkbox').as('registerAsAdministratorCheck')
  cy.dataTest('cadastrar').as('registerUserButton')
  cy.dataTest('entrar').as('goToLoginPageButton')
}