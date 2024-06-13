describe('App', () => {
  it('should navigate to the login page and login successfully', () => {
    cy.visit('/');
    cy.contains('Login').click();
    cy.url().should('include', '/login');

    cy.get('input[placeholder="Username"]').type('user');
    cy.get('input[placeholder="Password"]').type('password');
    cy.get('button[type="submit"]').click();

    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });
});