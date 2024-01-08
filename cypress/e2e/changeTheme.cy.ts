describe('ToggleTheme', () => {
  it('change state of checkbox(check/uncheck)', () => {
    cy.visit('/login');
    cy.get('[data-cy="email"]').type('user@yandex.ru');
    cy.get('[data-cy="password"]').type('Alex1234!!');
    cy.get('[data-cy="submit-login"]').click();

    cy.get('[type="checkbox"]').uncheck({ force: true });
    cy.get('[type="checkbox"]').click({ force: true });
    cy.get('[type="checkbox"]').check({ force: true });
  });
  it('changes background color', () => {
    cy.visit('/home');
    cy.get('[data-cy="app-wrapper"]').should('have.css', 'background-color', 'rgb(255, 255, 255)');
    cy.get('[type="checkbox"]').click({ force: true });
    cy.get('[data-cy="app-wrapper"]').should('have.css', 'background-color', 'rgb(35, 39, 47)');
    cy.get('[type="checkbox"]').click({ force: true });
    cy.get('[data-cy="app-wrapper"]').should('have.css', 'background-color', 'rgb(255, 255, 255)');
  });
  it('move bowl of toggleTheme after clicking', () => {
    cy.visit('/home');
    cy.get('[type="checkbox"]').click({ force: true });
    cy.get('[data-cy="bowl-theme"]').should('have.css', 'transform', 'matrix(1, 0, 0, 1, 25, 0)');
    cy.get('[type="checkbox"]').click({ force: true });
    cy.get('[data-cy="bowl-theme"]').should('have.css', 'transform', 'none');
    cy.get('[data-cy="log-out-btn"]').click();
  });
});
