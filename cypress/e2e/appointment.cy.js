///<reference types="cypress"/>
import loginPage from '../pages/loginPage';
import appointmentPage from '../pages/appointmentPage';

describe('Appointment Tests Cypress with POM', () => {
    beforeEach(function () {
        cy.fixture('loginData').as('users');
        cy.fixture('appointmentData').as('appointments');
    });

    it('TC01 Buat Appointment Sukses', function () {
        // Step 1: Login dulu
        cy.login(this.users.TC01.username, this.users.TC01.password);
        // Step 2: Isi appointment
        appointmentPage.selectFacility(this.appointments.TC01.facility);
        appointmentPage.checkHospitalReadmission();
        appointmentPage.selectHealthcareProgram(this.appointments.TC01.program);
        appointmentPage.setVisitDate(this.appointments.TC01.date);
        appointmentPage.setComment(this.appointments.TC01.comment);
        appointmentPage.clickBookAppointment();

        // Step 3: Verifikasi konfirmasi berhasil
        appointmentPage.verifyConfirmation();
    });
    it('TC02 Buat Appointment dengan Comment Kosong', function () {
        // Step 1: Login dulu
        cy.login(this.users.TC01.username, this.users.TC01.password);

        // Step 2: Isi appointment
        appointmentPage.selectFacility(this.appointments.TC02.facility);
        appointmentPage.checkHospitalReadmission();
        appointmentPage.selectHealthcareProgram(this.appointments.TC02.program);
        appointmentPage.setVisitDate(this.appointments.TC02.date);
        appointmentPage.clickBookAppointment();

        // Step 3: Verifikasi konfirmasi berhasil
        appointmentPage.verifyConfirmation();
    });
    it('TC03 Buat Appointment dengan Date kosong', function () {
        // Step 1: Login dulu
        cy.login(this.users.TC01.username, this.users.TC01.password);

        // Step 2: Isi appointment
        appointmentPage.selectFacility(this.appointments.TC03.facility);
        appointmentPage.checkHospitalReadmission();
        appointmentPage.selectHealthcareProgram(this.appointments.TC03.program);
        appointmentPage.setComment(this.appointments.TC03.comment);
        appointmentPage.clickBookAppointment();

        // Step 3: Assertion muncul alert
        cy.on('window:alert', (txt) => {
            expect(txt).to.contains('Please fill out this field')
        })
    });
});
