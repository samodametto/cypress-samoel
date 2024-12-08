import { mapLoginPage } from '../pages/selectors/login.s';

Cypress.Commands.add('dataTest', (value) => cy.get(`[data-testid="${value}"]`));

Cypress.Commands.add('login', (name) => {
  switch (name) {
    case 'user': {
      cy.session(name, () => {
        cy.visit('/login');

        mapLoginPage();

        cy.get('@emailField').type(Cypress.env().userEmail);
        cy.get('@passwordField').type(Cypress.env().userPassword);
        cy.get('@loginButton').click();
        cy.url()
          .should('not.contain', '/login')
          .should('include', '/admin/home');
      });
      break;
    }
    case 'api-user': {
      const url = `${Cypress.env('url')}/login`;

      cy.request({
        method: 'POST',
        url,
        headers: {
          accept: 'application/json',
          ContentType: 'application/json',
        },
        body: {
          email: Cypress.env().userEmail,
          password: Cypress.env().userPassword,
        },
      }).then((response) => {
        expect(response.status).eq(200);
        expect(response.body.message).eq('Login realizado com sucesso')

        Cypress.env('sessionToken', response.body.authorization);
      });
      break;
    }
    default:
      break;
  }
});
