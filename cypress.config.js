const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "is5e2x",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
