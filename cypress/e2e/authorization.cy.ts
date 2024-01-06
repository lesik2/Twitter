describe('Authorization', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.url().should('include', '/');
  });
  it('Should navigate to Authorization page', () => {
    cy.contains('Happening now');
    cy.contains('Join Twitter today');
    cy.get('[data-cy="sign-up-link"]').should('exist');
    cy.get('[data-cy="google-register"]').should('exist');
    cy.get('[data-cy="login-link"]').should('exist');
  });
  it('should navigate to login page', () => {
    cy.get('[data-cy="login-link"]').click();
    cy.url().should('include', '/login');
  });
  it('should navigate to signup page', () => {
    cy.get('[data-cy="sign-up-link"]').click();
    cy.url().should('include', '/signup');
  });
});
