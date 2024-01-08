describe('TweetForm', () => {
  it('Should render TweetForm with necessary components', () => {
    cy.visit('/login');
    cy.get('[data-cy="email"]').type('user@yandex.ru');
    cy.get('[data-cy="password"]').type('Alex1234!!');
    cy.get('[data-cy="submit-login"]').click();

    cy.get('[data-cy="text-tweet"]').should('have.value', '');
    cy.get('[data-cy="btn-tweet"]').should('be.disabled');
    cy.get('[data-cy="image-input-tweet"]').should('exist');
  });
  it('should type textarea and enabled submit button', () => {
    cy.visit('/home');
    cy.get('[data-cy="text-tweet"]').type('New tweet');
    cy.get('[data-cy="text-tweet"]').should('have.value', 'New tweet');
    cy.get('[data-cy="btn-tweet"]').should('not.be.disabled');
  });
  it('Should show loader while submitting tweet', () => {
    cy.visit('/home');
    cy.get('[data-cy="text-tweet"]').type('New tweet one more tweet something Hello world again one two');
    cy.get('[data-cy="btn-tweet"]').click();
    cy.get('[data-cy="loader-tweet"]').should('exist');
  });
  it('Should create new tweet and show it on Home page and Profile', () => {
    cy.visit('/home');
    const tweetsAmount = cy.get('[data-cy="home-tweets-wrapper"]').children.length;
    cy.get('[data-cy="text-tweet"]').type('New tweet one more tweet something Hello world again one two');
    cy.get('[data-cy="btn-tweet"]').click();
    cy.get('[data-cy="home-tweets-wrapper"]').should('have.length.greaterThan', tweetsAmount);
    cy.get('[data-cy="home-tweets-wrapper"]').should(
      'contain',
      'New tweet one more tweet something Hello world again one two',
    );
    cy.visit('/profile');
    cy.get('[data-cy="profile-tweets-wrapper"]').should('have.length.greaterThan', tweetsAmount);
    cy.get('[data-cy="profile-tweets-wrapper"]').should(
      'contain',
      'New tweet one more tweet something Hello world again one two',
    );

    cy.get('[data-cy="log-out-btn"]').click();
  });
});
