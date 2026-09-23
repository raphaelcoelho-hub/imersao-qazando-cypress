class LoginPage {
    accessLoginPage() {
        cy.visit('/login');
    }

    fillEmail(email) {
        cy.get('#user').type(email);
    }

    fillPassword(password) {
        cy.get('#password').type(password);
    }

    clickLogin() {
        cy.get('#btnLogin').click();
    }

    checkSuccessMessage(message) {
        cy.get('#swal2-title').should('have.text', message);
    }

    checkErrorMessage(message) {
        cy.get('.invalid_input').should('have.text', message);
    }
}

export default new LoginPage();
