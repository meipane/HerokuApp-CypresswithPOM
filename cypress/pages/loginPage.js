///<reference types ="cypress"/>
class loginPage {
    visit() {
        cy.visit('https://katalon-demo-cura.herokuapp.com/')
    }

    clickMakeAppointment() {  //versi 1
        cy.get('#btn-make-appointment').click()
    }

    clickToggle() {
        cy.get('#menu-toggle').click()
        cy.contains('Login').click()
    }

    enterUsername(username) {
        cy.get('#txt-username').clear().type(username)
    }

    enterPassword(password) {
        cy.get('#txt-password').clear().type(password)
    }

    clickLogin() {
        cy.get('#btn-login').click()
    }

    verifyErrorMessage(message) {
        cy.get('.text-danger').should('contain', message)
    }
}

export default new loginPage