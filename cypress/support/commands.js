import loginPage from "../pages/loginPage";

Cypress.Commands.add('login', (username, password) => {
  loginPage.visit()
  loginPage.clickMakeAppointment()
  loginPage.enterUsername(username)
  loginPage.enterPassword(password)
  loginPage.clickLogin()
})
