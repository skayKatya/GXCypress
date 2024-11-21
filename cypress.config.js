const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 20000,
  watchForFileChanges: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
  numTestsKeptInMemory: 1,
  chromeWebSecurity: false,
  screenshotsFolder: "screenshots",
  videosFolder: "video",
  video: false,
  responseTimeout: 30000,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    retries: {
      runMode: 1,
      openMode: 1,
    },
    baseUrl: 'https://web-dev.growth-x.com/ '
  },
});
