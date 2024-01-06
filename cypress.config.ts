import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(_on, _config) {},
    supportFile: false,
    baseUrl: 'http://localhost:5173',
    defaultCommandTimeout: 4100,
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
});
