/// <reference types="cypress"/>

describe('Testes de Login', () => {
  it("login com sucesso", () => {
    cy.visit('/login');
    cy.get('#user').type('teste@teste.com');
    cy.get('#password').type('123456');
    cy.get('#btnLogin').click();
    cy.get('#swal2-title').should('have.text', "Login realizado");
})

  it('login com email vazio', () => {
    cy.visit('/login');
    cy.get('#password').type('123456');
    cy.get('#btnLogin').click();
    cy.get('.invalid_input').should('have.text', 'E-mail inválido.');
     
  })

  it('login com senha vazia', () => {
    cy.visit('/login');
    cy.get('#user').type('teste@teste.com');
    cy.get('#btnLogin').click();
    cy.get('.invalid_input').should('have.text', 'Senha inválida.');
  });

  it('login com ambos campos vazios', () => {
    cy.visit('/login');
    cy.get('#btnLogin').click();
    cy.get('.invalid_input').should('have.text', 'E-mail inválido.');
  })

  it('login com formato de email inválido', () => {
    cy.visit('/login');
    cy.get('#user').type('teste@teste');
    cy.get('#password').type('123456');
    cy.get('#btnLogin').click();
    cy.get('.invalid_input').should('have.text', 'E-mail inválido.');
  })


  it('login com senha inválida', () => {
    cy.visit('/login');
    cy.get('#user').type('teste@teste.com');
    cy.get('#password').type('123');
    cy.get('#btnLogin').click();
    cy.get('.invalid_input').should('have.text', 'Senha inválida.');
  });

})
