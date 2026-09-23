/// <reference types="cypress"/>

describe('Cadastro de usuário', () => {
    it('cadastro com sucesso', () => {
        cy.visit('https://automationpratice.com.br/register');
        cy.get('#user').type('Chaves');
        cy.get('#email').type('chaves@kiko.com');
        cy.get('#password').type('654321');
        cy.get('#btnRegister').click();
        cy.get('#swal2-title').should('have.text', "Cadastro realizado!");
    });

    it('cadastro com nome vazio', () => {
        cy.visit('https://automationpratice.com.br/register');
        cy.get('#email').type('chaves.kiko.com');
        cy.get('#password').type('654321');
        cy.get('#btnRegister').click();
        cy.get('#errorMessageFirstName').should('have.text', "O campo nome deve ser prenchido");
    });

    it('cadastro com e-mail vazio', () => {
        cy.visit('https://automationpratice.com.br/register');
        cy.get('#user').type('Chaves');
        cy.get('#password').type('654321');
        cy.get('#btnRegister').click();
        cy.get('#errorMessageFirstName').should('have.text', "O campo e-mail deve ser prenchido corretamente");
    });

    it('cadastro com senha vazia', () => {
        cy.visit('https://automationpratice.com.br/register');
        cy.get('#user').type('Chaves');
        cy.get('#email').type('chaves@kiko.com');
        cy.get('#btnRegister').click();
        cy.get('#errorMessageFirstName').should('have.text', "O campo senha deve ter pelo menos 6 dígitos");
    })
    
    it('cadastro com todos os campos vazios', () => {
        cy.visit('https://automationpratice.com.br/register');
        cy.get('#btnRegister').click();
        cy.get('#errorMessageFirstName').eq(0).should('have.text', "O campo nome deve ser prenchido"); 
    })

    it('cadastro com e-mail inválido', () => {
        cy.visit('https://automationpratice.com.br/register');
        cy.get('#user').type('Chaves');
        cy.get('#email').type('chaves@.com');
        cy.get('#password').type('654321');
        cy.get('#btnRegister').click();
        cy.get('#errorMessageFirstName').should('have.text', "O campo e-mail deve ser prenchido corretamente");
    })
    
    it('cadastro com senha inválida', () => {
        cy.visit('https://automationpratice.com.br/register');
        cy.get('#user').type('Chaves');
        cy.get('#email').type('chaves@ccc.com');
        cy.get('#password').type('15632');
        cy.get('#btnRegister').click();
        cy.get('#errorMessageFirstName').should('have.text' , "O campo senha deve ter pelo menos 6 dígitos")
    })
     
    
})