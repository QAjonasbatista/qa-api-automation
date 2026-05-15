const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',

  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome-report',
    overwrite: false,
    html: true,
    json: true,
    timestamp: 'mmddyyyy_HHMMss'
  },

  e2e: {
    setupNodeEvents(on, config) {

    },
  },
});