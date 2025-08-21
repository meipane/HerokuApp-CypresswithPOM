///<reference types="cypress"/>
class appointmentPage {
    visit() {
        cy.visit('https://katalon-demo-cura.herokuapp.com/')
    }

    selectFacility(facility) {
        cy.get('#combo_facility').select(facility)
    }

    checkHospitalReadmission() {
        cy.get('#chk_hospotal_readmission').check()
    }

    selectHealthcareProgram(program) {
        cy.get(`input[value="${program}"]`).check()
    }

    setVisitDate(date) {
        cy.get('#txt_visit_date').type(date)
    }

    setComment(comment) {
        cy.get('body').click(0, 0)   // klik sembarang untuk nutup datepicker
        cy.get('#txt_comment').clear().type(comment)
    }

    clickBookAppointment() {
        cy.get('#btn-book-appointment').click()
    }

    verifyConfirmation(appointmentData) {
        // Assertion halaman konfirmasi
        cy.get('h2').should('contain', 'Appointment Confirmation')
    }
}

export default new appointmentPage()
