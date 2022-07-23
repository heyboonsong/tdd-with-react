const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  screenshotsFolder: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
