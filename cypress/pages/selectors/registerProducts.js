export function mapRegisterProduct() {
  // HEADER
  cy.dataTest('nome').as('productNameField');
  cy.dataTest('preco').as('productCostField')
  cy.dataTest('descricao').as('productDescriptionField')
  cy.dataTest('quantity').as('productQuantityField')
  cy.dataTest('imagem').as('productImageUpload')
  cy.dataTest('cadastarProdutos').as('registerProductButton')
}
