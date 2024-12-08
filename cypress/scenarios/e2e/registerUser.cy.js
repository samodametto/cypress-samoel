import { mapLoginPage } from '../../pages/selectors/login.s';
import { mapRegisterUserPage } from '../../pages/selectors/registerUser.s';
import { faker } from '@faker-js/faker';

describe('E2E | LOGIN | Register User', () => {
  beforeEach(()=>{
    cy.visit('/login');
    cy.url().should('contains', '/login');

    mapLoginPage();

    cy.get('@goToRegisterPageButton').click();
    cy.url().should('contains', '/cadastrarusuarios');

    mapRegisterUserPage();
  })

  it('Should register an user as administrator correctly', () => {
    const name = faker.internet.username(); 
    const email = faker.internet.email(); 
    const password = faker.internet.password(12);

    cy.get('@nameField').type(name);
    cy.get('@emailField').type(email);
    cy.get('@passwordField').type(password);
    cy.get('@registerAsAdministratorCheck').click();
    cy.get('@registerUserButton').click();

    cy.get('.alert-link')
      .should('have.text', 'Cadastro realizado com sucesso');

    cy.url({ timeout: 15000 }).should('contains', '/admin/home');
  });
});
