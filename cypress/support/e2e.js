import '@shelex/cypress-allure-plugin';

Cypress.on('uncaught:exception', (err, runnable) => {
  // Prevent Cypress from failing the test
  return false;
});

import './commands';

