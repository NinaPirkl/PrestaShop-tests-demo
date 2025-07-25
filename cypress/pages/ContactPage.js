class ContactPage {
  visit() {
    cy.visit('/cs/napiste-nam');
  }

  getTitle() {
    return cy.title();
  }

  selectSubject(subjectText) {
    return cy.get('select[name="id_contact"]').select(subjectText);
  }

  fillEmail(email) {
    return cy.get('input[name="from"]').clear().type(email);
  }

  fillMessage(message) {
    return cy.get('textarea[name="message"]').clear().type(message);
  }

  attachFile(filePath) {
    return cy.get('input[type="file"]').selectFile(filePath, { force: true });
  }

  submitForm() {
    return cy.get('input[name="submitMessage"]', { timeout: 100000 })
     .should('be.visible')
     .click();
  }

  getSuccessAlert() {
    return cy.get('.alert-success');
  }

  getErrorAlert() {
    return cy.get('.alert.alert-danger');
  }

 verifyOnContactPage() {
    this.getTitle().should('include', 'Kontaktujte nás');
    cy.url().should('include', '/napiste-nam');
    cy.get('.contact-form').should('exist');
  }
}

export default ContactPage;

