/* eslint-disable */

let LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add('saveLocalStorage', () => {
  Object.keys(localStorage).forEach(key => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key];
  });
});

Cypress.Commands.add('restoreLocalStorage', () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
  });
});

describe('Quero Bolsa, favorites page', () => {
  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  it('Must add to Cart', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-cypress="products-item"]')
      .first()
      .click();

    cy.get('[data-cypress="size-item"')
      .first()
      .click();

    cy.get('[data-cypress="detailed-submit"').click();

    cy.visit('http://localhost:3000/cart');

    cy.get('[data-cypress="cart-list"]')
      .find('[data-cypress="cart-item"]')
      .should('have.length', 1);
  });

  it('Must persiste state', () => {
    cy.visit('http://localhost:3000/cart');

    cy.get('[data-cypress="cart-list"]')
      .find('[data-cypress="cart-item"]')
      .should('have.length', 1);
  });
});
