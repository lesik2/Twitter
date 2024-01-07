import { getAuth, deleteUser } from 'firebase/auth';

describe('SignUp', () => {
  beforeEach(() => {
    cy.visit('/signup');
    cy.url().should('include', '/signup');
  });
  it('Should navigate to SignUp page and have disabled  submit button and have empty inputs ', () => {
    cy.contains('Create an account');
    cy.get('[data-cy="month"]').should('have.text', 'month');
    cy.get('[data-cy="year"]').should('have.text', 'year');
    cy.get('[data-cy="day"]').should('have.text', 'day');
    cy.get('[data-cy="signup-name"]').should('value', '');
    cy.get('[data-cy="signup-phoneNumber"]').should('value', '');
    cy.get('[data-cy="signup-email"]').should('value', '');
    cy.get('[data-cy="signup-password"]').should('value', '');
    cy.get('button[type="submit"').should('be.disabled').should('have.text', 'Next');
  });
  it('Should type inputs and select date', () => {
    cy.get('[data-cy="signup-name"]').type('Alex');
    cy.get('[data-cy="signup-phoneNumber"]').type('+3756736484623');
    cy.get('[data-cy="signup-email"]').type('aleshik@gmail.com');
    cy.get('[data-cy="signup-password"]').type('Alex1234!');

    cy.get('[data-cy="signup-name"]').should('value', 'Alex');
    cy.get('[data-cy="signup-phoneNumber"]').should('value', '+3756736484623');
    cy.get('[data-cy="signup-email"]').should('value', 'aleshik@gmail.com');
    cy.get('[data-cy="signup-password"]').should('value', 'Alex1234!');

    cy.get('[data-cy="month"]').click();
    cy.contains('January').click();
    cy.get('[data-cy="month"]').should('have.text', 'January');

    cy.get('[data-cy="day"]').click();
    cy.contains('22').click();
    cy.get('[data-cy="day"]').should('have.text', '22');

    cy.get('[data-cy="year"]').click();
    cy.contains('1999').click();
    cy.get('[data-cy="year"]').should('have.text', '1999');

    cy.get('button[type="submit"').should('not.be.disabled');
  });
  it('Should navigate to authorization page', () => {
    cy.contains('User email').click();
    cy.url().should('include', '/');
    cy.contains('Happening now');
    cy.contains('Join Twitter today');
  });
  it('Should validate date options(reset day if it not exist in current month)', () => {
    cy.get('[data-cy="day"]').click();
    cy.contains('31').click();

    cy.get('[data-cy="month"]').click();
    cy.contains('February').click();

    cy.get('[data-cy="day"]').should('have.text', 'day');
  });
  it('Should show error message and disables submit button', () => {
    cy.get('[data-cy="signup-name"]').type('Alex1212');
    cy.get('[data-cy="signup-phoneNumber"]').type('+3756736484623asas');
    cy.get('[data-cy="signup-email"]').type('aleshik@');
    cy.get('[data-cy="signup-password"]').type('Alex');

    cy.contains('Invalid input. Please enter letters only.');
    cy.contains('Invalid email address.');
    cy.contains('Password should contains at least 8 symbols');
    cy.contains('Invalid phone number. Format: +375XXXXXXXXX');

    cy.get('[data-cy="signup-password"]').type('12348732');
    cy.contains('Password should contains at least one uppercase letter and one special symbol. ');
    cy.get('button[type="submit"').should('be.disabled');
  });
  it('Should show error message if user enter already used email and stay on signUp page', () => {
    cy.get('[data-cy="signup-name"]').type('Alex');
    cy.get('[data-cy="signup-phoneNumber"]').type('+3756736484623');
    cy.get('[data-cy="signup-email"]').type('lesha@gmail.com');
    cy.get('[data-cy="signup-password"]').type('Alex1234!');

    cy.get('[data-cy="month"]').click();
    cy.contains('January').click();
    cy.get('[data-cy="day"]').click();
    cy.contains('22').click();
    cy.get('[data-cy="year"]').click();
    cy.contains('1999').click();

    cy.get('button[type="submit"').click();

    cy.get('[data-cy="snack-bar"]').should('exist');
    cy.contains('This email is already taken.Choose another one.');
    cy.url().should('include', '/signup');
    cy.wait(4100);
    cy.get('[data-cy="snack-bar"]').should('not.be.visible');
  });
  it('During submission should  show loader', () => {
    cy.get('[data-cy="signup-name"]').type('Alex');
    cy.get('[data-cy="signup-phoneNumber"]').type('+3756736484623');
    cy.get('[data-cy="signup-email"]').type('lesha@gmail.com');
    cy.get('[data-cy="signup-password"]').type('Alex1234!');

    cy.get('[data-cy="month"]').click();
    cy.contains('January').click();
    cy.get('[data-cy="day"]').click();
    cy.contains('22').click();
    cy.get('[data-cy="year"]').click();
    cy.contains('1999').click();

    cy.get('button[type="submit"').click();
    cy.get('[data-cy="loader"]').should('exist');
  });
  it('Should navigate to Home page after successful registration', async () => {
    cy.get('[data-cy="signup-name"]').type('Alex');
    cy.get('[data-cy="signup-phoneNumber"]').type('+3756736484623');
    cy.get('[data-cy="signup-email"]').type('leshaa@gmail.com');
    cy.get('[data-cy="signup-password"]').type('Alex1234!');

    cy.get('[data-cy="month"]').click();
    cy.contains('January').click();
    cy.get('[data-cy="day"]').click();
    cy.contains('22').click();
    cy.get('[data-cy="year"]').click();
    cy.contains('1999').click();

    cy.get('button[type="submit"').click();
    cy.url().should('include', '/home');
    cy.contains('Home');
    cy.get('[data-cy="side-bar"]').should('exist');
    try {
      await deleteUser(getAuth().currentUser);
    } catch (error) {
      console.error(error);
    }
  });
});
