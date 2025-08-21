///<reference types="cypress"/>
import loginPage from "../pages/loginPage";

describe('Login Test Cypress with POM', () => {
    beforeEach(function() {
        cy.fixture('loginData').as('users');
    });

    it('TC01 Login Sukses Via MakeAppointment', function() {
        cy.login(this.users.TC01.username, this.users.TC01.password);

        cy.url().should('include', '/#appointment')
    });

    it('TC02 Login Sukses Via Toggle Menu', function() {
        loginPage.visit()
        loginPage.clickToggle()
        loginPage.enterUsername(this.users.TC02.username)
        loginPage.enterPassword(this.users.TC02.password)
        loginPage.clickLogin()

        cy.url().should('include', '/#appointment')
    });

    it('TC03 Login dengan Username salah', function() {
        loginPage.visit()
        loginPage.clickMakeAppointment()
        loginPage.enterUsername(this.users.TC03.username)
        loginPage.enterPassword(this.users.TC03.password)
        loginPage.clickLogin()

        loginPage.verifyErrorMessage('Login failed! Please ensure the username and password are valid.')
    });

    it('TC04 Login dengan Password salah', function() {
        loginPage.visit()
        loginPage.clickMakeAppointment()
        loginPage.enterUsername(this.users.TC04.username)
        loginPage.enterPassword(this.users.TC04.password)
        loginPage.clickLogin()

        loginPage.verifyErrorMessage('Login failed! Please ensure the username and password are valid.')
    });

    it('TC05 Login dengan Username Kosong', function() {
        loginPage.visit()
        loginPage.clickMakeAppointment()
        loginPage.enterPassword(this.users.TC05.password)
        loginPage.clickLogin()

        loginPage.verifyErrorMessage('Login failed! Please ensure the username and password are valid.')
    });

    it('TC06 Login dengan Password Kosong', function() {
        loginPage.visit()
        loginPage.clickMakeAppointment()
        loginPage.enterUsername(this.users.TC06.username)
        loginPage.clickLogin()

        loginPage.verifyErrorMessage('Login failed! Please ensure the username and password are valid.')
    });

    it('TC07 Login dengan data yang Kosong', function() {
        loginPage.visit()
        loginPage.clickMakeAppointment()
        loginPage.clickLogin()

        loginPage.verifyErrorMessage('Login failed! Please ensure the username and password are valid.')
    });
});