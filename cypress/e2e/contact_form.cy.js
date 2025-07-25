import ContactPage from '../pages/ContactPage';

const contactPage = new ContactPage();

describe('Contact Page Form Tests', () => {
  afterEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });
  beforeEach(() => {
    contactPage.visit();
    contactPage.verifyOnContactPage();
  });

  it('should submit form successfully with valid data', () => {
    contactPage.selectSubject('Zákaznický servis');
    contactPage.fillEmail('test@example.com');
    contactPage.fillMessage('Toto je testovací zpráva.');
    contactPage.submitForm();

    contactPage.getSuccessAlert()
      .should('exist')
      .should($el => {
	expect($el.text().toLowerCase()).to.match(/úspěšně odeslán/i);
      })
 });

  it('should not submit with invalid email', () => {
    contactPage.selectSubject('Webmaster');
    contactPage.fillEmail('not-an-email');
    contactPage.fillMessage('Test message');

    cy.get('input[name="from"]').then(($input) => {
      expect($input[0].checkValidity()).to.be.false;
      expect($input[0].validationMessage).to.contain('@');
    });

    cy.get('input[name="submitMessage"]').click();
    cy.get('.alert.alert-success').should('not.exist');
  });

  it('should show error when required fields are empty', () => {
    contactPage.submitForm();

    contactPage.getErrorAlert()
      .should('exist')
      .should($el => {
        expect($el.text().toLowerCase()).to.match(/neplatná/i);
      })
  });
});

