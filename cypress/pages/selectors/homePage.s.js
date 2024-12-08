export function mapHomePage() {
  // HEADER
  cy.dataTest('home').as('registerUserPageTitle');
  cy.dataTest('cadastrar-usuarios').as('registerUserHeaderButton')
  cy.dataTest('listar-usuarios').as('listUsersHeaderButton')
  cy.dataTest('cadastrar-produtos').as('registerProductsHeaderButton')
  cy.dataTest('listar-produtos').as('listProductsHeaderButton')
  cy.dataTest('link-relatorios').as('reportsLinkHeaderButton')
  cy.dataTest('logout').as('logoutHeaderButton')

  // BODY
  cy.dataTest('cadastrarUsuarios').as('registerUserButton')
  cy.dataTest('listarUsuarios').as('listUsersButton')
  cy.dataTest('cadastrarProdutos').as('registerProductsButton')
  cy.dataTest('listarProdutos').as('listProductsButton')
  cy.dataTest('relatorios').as('reportsLinkButton')
}
