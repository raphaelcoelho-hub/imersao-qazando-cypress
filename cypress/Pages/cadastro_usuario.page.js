class CadastroUsuarioPage {
    accessRegisterPage() {
        cy.visit('https://automationpratice.com.br/register');
    }

    fillName(name) {
        cy.get('#user').type(name);
    }

    fillEmail(email) {
        cy.get('#email').type(email);
    }

    fillPassword(password) {
        cy.get('#password').type(password);
    }

    clickRegister() {
        cy.get('#btnRegister').click();
    }

    checkSuccessMessage(message) {
        cy.get('#swal2-title').should('have.text', message);
    }

    checkErrorMessage(message) {
        cy.get('#errorMessageFirstName').should('have.text', message);
    }

    checkErrorMessageIndex(index, message) {
        cy.get('#errorMessageFirstName').eq(index).should('have.text', message);
    }
}

export default new CadastroUsuarioPage();
