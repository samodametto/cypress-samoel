import 'cypress-file-upload'

import { mapHomePage } from '../../pages/selectors/homePage.s';
import { mapRegisterProduct } from '../../pages/selectors/registerProducts';
import { faker } from '@faker-js/faker';

describe('E2E | PRODUCTS | Register Product', () => {
  beforeEach(()=>{
    cy.login('user');
    cy.visit('/admin/home');
  
    mapHomePage();
  })

  it('Should register an new product', () => {
    cy.get('@registerProductsHeaderButton').click();
    cy.url().should('contains', '/cadastrarprodutos');
    
    mapRegisterProduct();

    const name = faker.food.dish(); 
    const description = faker.food.description(); 
    const filePath = 'images/apple.jpg';

    Cypress.env('productName', name);
    Cypress.env('productDescription', description);

    cy.get('@productNameField').type(name);
    cy.get('@productCostField').type('10.00');
    cy.get('@productDescriptionField').type(description);
    cy.get('@productQuantityField').type(100);
    cy.get('@productImageUpload').attachFile(filePath);
    cy.get('@registerProductButton').click();

    cy.url({ timeout: 15000 }).should('contains', '/listarprodutos');
  });

  it('Should validate if created product is listed', () => {
    cy.get('@listProductsHeaderButton').click();
    cy.url({ timeout: 15000 }).should('contains', '/listarprodutos');

    cy.get(`tr:contains(${Cypress.env().productName})`)
      .find(`td:contains(${Cypress.env().productDescription})`)
  });
});
