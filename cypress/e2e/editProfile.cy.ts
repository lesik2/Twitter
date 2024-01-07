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
});
