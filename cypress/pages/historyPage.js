///<reference types="cypress"/>
class historyPage{
    visit(){
        cy.visit('https://katalon-demo-cura.herokuapp.com/')
    }

    clickToggle() {
        cy.get('#menu-toggle').click()
        cy.contains('History').click()
    }
}

export default new historyPage