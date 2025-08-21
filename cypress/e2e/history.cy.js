///<reference types="cypress"/>
import historyPage from '../pages/historyPage';

describe('History Test Cypress with POM', () => {
  beforeEach(function () {
    cy.fixture('loginData').as('users');
  });

  it('TC01 - Melihat History', function() {
    cy.login(this.users.TC01.username, this.users.TC01.password);
    historyPage.clickToggle();
  });
});
