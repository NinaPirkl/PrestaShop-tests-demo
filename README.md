# Cypress E2E Tests – Tesena e-shop Website

This repository contains end-to-end tests written in Cypress for the website http://37.27.17.198:8084/cs/

The purpose is to demonstrate my skills in automated UI testing, code organization, and CI/CD readiness as part of a technical assignment.

---

``` ## Project Structure
cypress/
├── e2e/
│ ├── homepage.cy.js # UI structure & localization tests
│ └── form_validation.cy.js # Negative test for empty form
├── support/
│ ├── commands.js # Reusable custom commands
│ └── e2e.js # Auto-loaded support setup
cypress.config.js # Cypress configuration
.github/workflows/cypress.yml # Optional CI pipeline for GitHub Actions
```
---

## How to start

1. Install dependencies:

npm install

2. Run tests:

npx cypress open

3. Run tests headlessly (CI or local):

npx cypress run
