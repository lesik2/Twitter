describe('Login', () => {
  beforeEach(() => {
    cy.visit('/login');
    cy.url().should('include', '/login');
  });
  it('Should navigate to LogIn page and have disabled  submit button and have empty inputs ', () => {
    cy.contains('Log in to Twitter');
    cy.get('[data-cy="submit-login"]').should('be.disabled');
    cy.get('[data-cy="email"]').should('have.value', '');
    cy.get('[data-cy="password"]').should('have.value', '');
  });
  it('Should navigate to SignUp page after clicking on link', () => {
    cy.contains('Sign up to Twitter').click();
    cy.url().should('include', '/signup');
    cy.contains('Create an account');
  });
  it('Should type inputs and enabled submit button', () => {
    cy.get('[data-cy="email"]').type('lesha@gmail.com');
    cy.get('[data-cy="password"]').type('Alex1234!');
    cy.get('[data-cy="submit-login"]').should('be.not.disabled');

    cy.get('[data-cy="email"]').clear();
    cy.get('[data-cy="password"]').clear();
    cy.get('[data-cy="submit-login"]').should('be.disabled');
  });
  it('During submission should  show loader', () => {
    cy.get('[data-cy="email"]').type('lesha@gmail.com');
    cy.get('[data-cy="password"]').type('Alex1234!');
    cy.get('[data-cy="submit-login"]').click();
    cy.get('[data-cy="loader"]').should('exist');
  });
  it('if error should show error and should not navigate', () => {
    cy.get('[data-cy="email"]').type('lesha@gmail.com');
    cy.get('[data-cy="password"]').type('Alex1234!');
    cy.get('[data-cy="submit-login"]').click();
    cy.get('[data-cy="snack-bar"]').should('exist');
    cy.url().should('include', '/login');
    cy.wait(4100);
    cy.get('[data-cy="snack-bar"]').should('not.be.visible');
  });
  it('Should navigate to home page after success authorization', () => {
    cy.get('[data-cy="email"]').type('user@yandex.ru');
    cy.get('[data-cy="password"]').type('Alex1234!!');
    cy.get('[data-cy="submit-login"]').click();
    cy.url().should('include', '/home');
    cy.contains('Home');
    cy.get('[data-cy="side-bar"]').should('exist');
  });
});
