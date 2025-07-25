class Homepage {
  visit() {
    cy.visit('http://37.27.17.198:8084/cs/');
  }

  getLogo() {
    return cy.get('#_desktop_logo img');
  }

  getTopMenu() {
    return cy.get('#_desktop_top_menu');
  }

  getSearchInput() {
    return cy.get('input[name="s"]');
  }

  getContactLink() {
    return cy.get('#contact-link a');
  }

  getLanguageDropdown() {
    return cy.get('#_desktop_language_selector .dropdown-menu');
  }

  switchToEnglish() {
    cy.get('#_desktop_language_selector').click();

    cy.get('a[href$="/en/"]')
      .should('be.visible')
      .click();
  }

  getCarousel() {
    return cy.get('#carousel');
  }

  getProducts() {
    return cy.get('.products .product');
  }

  getFirstProduct() {
    return cy.get('.products .product').first();
  }

  getProductTitle(product) {
    return product.find('h3.product-title');
  }

  getProductPrice(product) {
    return product.find('.product-price-and-shipping .price');
  }

  clickQuickView(product) {
    return product.find('.quick-view').click({ force: true });
  }
  
  verifyQuickViewModal() {
  cy.get('.modal-dialog', { timeout: 8000 })
    .should('exist')
    .should('be.visible');

  cy.get('.modal-dialog:visible')
    .first()
    .within(() => {
      cy.get('button[data-button-action="add-to-cart"]').should('exist');
      cy.get('.modal-footer').should('exist');
    });
  }

}

export default Homepage;

