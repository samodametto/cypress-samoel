const { defineConfig } = require('cypress');

module.exports = defineConfig({
  retries: 2,
  e2e: {
    specPattern: 'cypress/scenarios/api/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',
    numTestsKeptInMemory: 3,
    cacheAcrossSpecs: true,
    setupNodeEvents() {
    },
  },
  env: {
    url: 'https://serverest.dev',
    env: 'prod',
    userName: 'Audie.Hahn65',
    userEmail: 'Daisha.Herzog@gmail.com',
    userPassword: 'VjKPf8QEXIUkb6X',
  },
});
