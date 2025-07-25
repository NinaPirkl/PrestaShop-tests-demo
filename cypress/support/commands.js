// Custom Cypress commands for Tesena shop

Cypress.Commands.add('switchLanguage', (lang) => {
  cy.get('footer').within(() => {
    cy.contains(lang, { matchCase: false }).click();
  });
});

Cypress.Commands.add('submitValidForm', () => {
  cy.get('input[name="name"]').type('Test User');
  cy.get('input[name="email"]').type('test@example.com');
  cy.get('textarea[name="message"]').type('This is a test message.');
  cy.get('form').submit();
});

Cypress.Commands.add('checkProductCard', (productName) => {
  cy.contains('.card-title', productName).should('be.visible');
});
