const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    screenshotOnRunFailure: true, // Screenshot otomatis saat gagal
    video: true,                   // Rekam video
    videosFolder: "cypress/videos",
    screenshotsFolder: "cypress/screenshots",
  },
  
});
