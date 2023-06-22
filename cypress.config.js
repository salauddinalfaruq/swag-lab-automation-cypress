const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {

    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.specPattern = [
        'cypress/e2e/Login.cy.js',
        'cypress/e2e/AddToCartTest.cy.js'
      ]
      return config;
    },
  },
});
