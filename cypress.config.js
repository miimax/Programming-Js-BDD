const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents,
  },
  defaultCommandTimeout: 10000
});






// const { defineConfig } = require("cypress")

// const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
// const addCucumberPreprocessorPlugin =
//   require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin
// const createEsbuildPlugin =
//   require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin

// module.exports = defineConfig({
//   e2e: {
//     async setupNodeEvents(on, config) {
//       const bundler = createBundler({
//         plugins: [createEsbuildPlugin(config)],
//       });

//       on("file:preprocessor", bundler);
//       await addCucumberPreprocessorPlugin(on, config);

//       return config;
//     },
//     specPattern: "cypress/e2e/*/*.feature",

//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });







// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//     specPattern: ["**/*.feature", "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"],
//   },
// });


// module.exports = async (on, config) => {
//   await addCucumberPreprocessorPlugin(on, config) // to allow json to be produced
//   // To use esBuild for the bundler when preprocessing
//   on(
//     'file:preprocessor',
//     createBundler({
//       plugins: [nodePolyfills(), createEsbuildPlugin(config)],
//     })
//   )
//   return config
// }

// in the step definition file 
//import { Given, When, Then, And } from “@badeball/cypress-cucumber-preprocessor” .