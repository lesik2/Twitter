describe('SignUp', () => {
  beforeEach(() => {
    cy.visit('/signup');
    cy.url().should('include', '/signup');
  });
  it('Should navigate to SignUp page and have disabled  submit button and have empty inputs ', () => {
    cy.contains('Create an account');
  });
});
