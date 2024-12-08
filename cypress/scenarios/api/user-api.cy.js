import { faker } from '@faker-js/faker';

describe('API | User | Should link and unlink a chat from wallet', () => {
  before('Prepare chats to wallet', () => {
    cy.login('api-user');
  });

  it('Positive / Should create an user', () => {
    const name = faker.internet.username(); 
    const email = faker.internet.email(); 
    const password = faker.internet.password(12);

    Cypress.env('apiUserName', name);
    Cypress.env('apiUserEmail', email);
    Cypress.env('apiUserPassword', password);

    const url = `${Cypress.env('url')}/usuarios`;

      cy.request({
        method: 'POST',
        url,
        headers: {
          accept: 'application/json',
          ContentType: 'application/json',
        },
        body: {
            nome: name,
            email: email,
            password: password,
            administrador: 'true',
        },
      }).then((response) => {
        expect(response.status).eq(201);
        expect(response.body.message).eq('Cadastro realizado com sucesso');

        Cypress.env('user-id', response.body._id);
      });
  });

  it('Positive / Should search an user by ID', () => {
    const url = `${Cypress.env('url')}/usuarios/${Cypress.env('user-id')}`;

      cy.request({
        method: 'GET',
        url,
        headers: {
          accept: 'application/json',
          ContentType: 'application/json',
        },
      }).then((response) => {
        expect(response.status).eq(200);
        expect(response.body.nome).eq(Cypress.env('apiUserName'));
        expect(response.body.email).eq(Cypress.env('apiUserEmail'));
        expect(response.body.password).eq(Cypress.env('apiUserPassword'));
        expect(response.body.administrador).eq('true');
        expect(response.body._id).eq(Cypress.env('user-id'));
      });
  });

  it('Positive / Should delete an user', () => {
    const url = `${Cypress.env('url')}/usuarios/${Cypress.env('user-id')}`;

      cy.request({
        method: 'DELETE',
        url,
        headers: {
          accept: 'application/json',
          ContentType: 'application/json',
        },
      }).then((response) => {
        expect(response.status).eq(200);
        expect(response.body.message).eq('Registro excluído com sucesso')
      });
  });
});
