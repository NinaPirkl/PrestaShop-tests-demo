import Homepage from '../pages/Homepage';

const homepage = new Homepage();

describe('PrestaShop homepage - visual smoke and UX flow', () => {
  beforeEach(() => {
    homepage.visit();
  });

  it('should display logo and top navigation menu', () => {
    homepage.getLogo().should('be.visible');
    homepage.getTopMenu().should('exist');
    homepage.getTopMenu().within(() => {
      cy.contains('Clothes');
      cy.contains('Art');
    });
  });

  it('should display working search input', () => {
    homepage.getSearchInput()
      .should('be.visible')
      .and('have.attr', 'placeholder', 'Hledat v katalogu');
  });

  it('should show visible carousel/banner on top', () => {
    homepage.getCarousel()
      .should('be.visible')
      .find('.carousel-item').its('length').should('be.gte', 1);
  });

  it('should display at least one product with name and price', () => {
    homepage.getProducts().should('have.length.greaterThan', 0);
    homepage.getFirstProduct().within(() => {
      cy.get('h3.product-title').should('exist').and('not.be.empty');
      cy.get('.price').should('contain.text', 'Kč');
    });
  });

  it('should open Quick View modal on first product', () => {
    homepage.getFirstProduct().trigger('mouseover');

    cy.get('.quick-view')
      .first()
      .should('be.visible')
      .click({ force: true });

    homepage.verifyQuickViewModal();
  });

  it('should switch language to English', () => {
    homepage.switchToEnglish();
    cy.url().should('include', '/en/');
    cy.get('html').should('have.attr', 'lang').and('match', /en/i);
  });

  it('should navigate to contact page', () => {
    homepage.getContactLink().click();
    cy.url().should('include', '/napiste-nam');
    cy.contains('Kontaktujte nás');
  });
});

