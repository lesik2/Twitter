describe('EditProfile', () => {
  it('Should open modal with user info and close modal after clicking on cross', () => {
    cy.visit('/login');
    cy.get('[data-cy="email"]').type('user@yandex.ru');
    cy.get('[data-cy="password"]').type('Alex1234!');
    cy.get('[data-cy="submit-login"]').click();

    cy.get('[data-cy="Profile"]').click();
    cy.url().should('include', '/profile');
    cy.wait(2000);
    cy.get('[data-cy="edit-profile-btn"]').click();
    cy.get('[data-cy="edit-profile"]').should('exist');
    cy.contains('Edit profile');

    cy.get('[data-cy="edit-name"]').should('not.have.value', '');
    cy.get('[data-cy="edit-phoneNumber"]').should('not.have.value', '');
    cy.get('[data-cy="edit-password"]').should('have.value', '');
    cy.get('[data-cy="edit-newPassword"]').should('have.value', '');
    cy.get('[data-cy="edit-btn"]').should('not.be.disabled').should('have.text', 'Save');

    cy.get('[data-cy="close-modal"]').click();
    cy.get('[data-cy="edit-profile"]').should('not.exist');
  });
  it('Should change data after submitting form', () => {
    cy.visit('/profile');
    cy.url().should('include', '/profile');
    cy.wait(2000);
    cy.get('[data-cy="edit-profile-btn"]').click();

    cy.get('[data-cy="edit-name"]').clear();
    cy.get('[data-cy="edit-name"]').type('new Name');
    cy.get('[data-cy="edit-link"]').clear();
    cy.get('[data-cy="edit-link"]').type('@puser');

    cy.get('[data-cy="edit-btn"]').click();

    cy.get('[data-cy="profile-name"]').should('have.text', 'new Name');
    cy.get('[data-cy="profile-link"]').should('have.text', '@puser');
  });
  it('Should show error if one of two inputs for password is empty', () => {
    cy.visit('/profile');
    cy.url().should('include', '/profile');
    cy.wait(2000);
    cy.get('[data-cy="edit-profile-btn"]').click();

    cy.get('[data-cy="edit-password"]').clear();
    cy.get('[data-cy="edit-password"]').type('Alex1234!');

    cy.get('[data-cy="edit-btn"]').click();
    cy.get('[data-cy="snack-bar"]').should('be.visible');
    cy.contains('Both fields with passwords should be filled');
    cy.wait(4100);
    cy.get('[data-cy="snack-bar"]').should('not.be.visible');
  });
  it('Should change user password after typing two fields with password', () => {
    cy.visit('/profile');
    cy.url().should('include', '/profile');
    cy.wait(2000);
    cy.get('[data-cy="edit-profile-btn"]').click();

    cy.get('[data-cy="edit-password"]').clear();
    cy.get('[data-cy="edit-password"]').type('Alex1234!');

    cy.get('[data-cy="edit-newPassword"]').clear();
    cy.get('[data-cy="edit-newPassword"]').type('Alex1234!!');

    cy.get('[data-cy="edit-btn"]').click();
    cy.get('[data-cy="edit-profile"]').should('not.exist');
    cy.get('[data-cy="log-out-btn"]').click();

    cy.visit('/login');
    cy.get('[data-cy="email"]').type('user@yandex.ru');
    cy.get('[data-cy="password"]').type('Alex1234!!');
    cy.get('[data-cy="submit-login"]').click();

    cy.get('[data-cy="Profile"]').click();
    cy.url().should('include', '/profile');

    cy.get('[data-cy="log-out-btn"]').click();
  });
});
